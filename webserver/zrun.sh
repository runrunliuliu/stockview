#!/bin/bash

mkdir -p logs/

# load stockinfo.csv
# python main.py -m stockinfo -p ~/apps/pyalgotrade/data/

# load xingtai
# python main.py -m xingtai -p ~/apps/pyalgotrade/data/dayk/xingtai/

# load mtime 
python main.py -m mtime -p ~/apps/pyalgotrade/data/dayk/mtime/
