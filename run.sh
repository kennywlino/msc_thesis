#!/bin/sh
#
# Your job name.
#$ -N parallel_test_klino
#
# Use current working directory
#$ -cwd
#
# pe (Parallel environment) request. Set your number of processors here.
#$ -pe mpich 60
#
# Join stdout and stderr
#$ -j y
#
# Run job through bash shell
#$ -S /bin/bash
#

# If modules are needed, source modules environment:
. /etc/profile.d/modules.sh

# Add any modules you might require:
module add shared
module load python/3.5.1
#module load openmpi/gcc/64/1.8.8

# Activate Conda environment

# source activate thesis

# Run the application
which python3
which mpirun
echo "Simulation Started."
echo "Date and Time now: "
date

#  *****   Edit Python file accordingly  *****
python3 train_ubm.py
