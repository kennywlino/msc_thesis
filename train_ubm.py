
#! /usr/bin/env python3

'''
Updated: 25/9/18
the following code is taken as an excerpt from the ivectors-AC-ARCTIC
Jupyter Notebook to train a UBM-GMM using data from the ARCTIC and
L2-ARCTIC corpus and the SIDEKIT toolkit.
'''

import os

os.environ["SIDEKIT"] = "theano=false,mpi=true"

import sidekit
from mpi4py import MPI

comm = MPI.COMM_WORLD

feat_dir = "./data/arctic2/feat/train"  # training data directory
feat_list = os.listdir(feat_dir)
# remove extension; add folder name
feat_list = ['train/' + f.split('.')[0] for f in feat_list]


# defines a FeaturesServer that describes *how* to load the data
fs = sidekit.FeaturesServer(features_extractor=None,
                            feature_filename_structure='./data/arctic2/feat/{}.h5',
                            sources=None,
                            dataset_list=["vad", "energy", "cep"],
                            mask=None,
                            feat_norm="cmvn",
                            global_cmvn=None,
                            dct_pca=False,
                            dct_pca_config=None,
                            sdc=False,
                            sdc_config=None,
                            delta=True,
                            double_delta=True,
                            delta_filter=None,
                            context=None,
                            traps_dct_nb=None,
                            rasta=False,
                            keep_all_features=False)

ubm = sidekit.Mixture()

# num_thread = 12 for number of threads on 1 node;
# see https://projets-lium.univ-lemans.fr/sidekit/tutorial/ubmTraining.html
# 'Training using EM split on several nodes'

sidekit.sidekit_mpi.EM_split(ubm=ubm,
                             features_server=fs,
                             feature_list=feat_list,
                             distrib_nb=512,
                             output_filename='arctic_ubm',
                             save_partial=True,
                             num_thread=12
                             )

