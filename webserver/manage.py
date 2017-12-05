#!/usr/bin/env python
import os
from app import create_app, db
from app.models import User, Role, Post, Follow, FirmType, FirmTier, Firm, \
    Company, Relationship, Geo, UserType, Stock, Tbuy, Holds, \
    FTdict, FTDay, DAPAN, PREDICT, SUMMARY
from flask_script import Manager, Shell
from flask_migrate import Migrate, MigrateCommand

application = create_app(os.getenv('FLASK_CONFIG', 'default'))
manager = Manager(application)
migrate = Migrate(application, db)


def make_shell_context():
    """
    Automatically import application, db, and model objects into interactive
    shell.
    """
    return dict(application=application, db=db, User=User, Geo=Geo, Role=Role,
                Follow=Follow, FirmType=FirmType, FirmTier=FirmTier, Firm=Firm,
                Company=Company, Relationship=Relationship, UserType=UserType)


@manager.command
def dapan_import(dayhour):
    files = '/home/himalayas/apps/beta/pytrade2/output/fts/ZS000001.ft.score.csv'
    FTdict.generate_fake(files)
    files = '/home/himalayas/apps/beta/pytrade2/output/fts/ZS000001.raw.csv'
    FTDay.generate_fake(files)
    files = '/home/himalayas/apps/beta/pytrade2/output/dapan/' + dayhour + '.log'
    DAPAN.generate_fake(files)
    files = '/home/himalayas/apps/beta/pytrade2/output/fts/ZS000001.test.pred.csv'
    PREDICT.generate_fake(files, dayhour)
    files = '/home/himalayas/apps/beta/pytrade2/output/fts/ZS000001.test.sum.csv'
    SUMMARY.generate_fake(files)


@manager.command
def db_import():
    db.create_all()
    Stock.generate_fake(1)
    files = '/home/himalayas/apps/opt/pytrade-4.3.1/output/kline/2016-12-27.kl.txt'
    Tbuy.generate_fake(files)


if __name__ == '__main__':
    manager.run()
