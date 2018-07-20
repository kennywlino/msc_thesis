\cleardoublepage
\chapter{Design and methodology}

In this chapter, I introduce the dataset and tools utilized in the experiments, and detail the procedures carried out to conduct the accent conversion process.

# Data
The main dataset utilized in the following experiments is the [put corpus here].


# Experiment 1: GMM-based accent conversion
This experiment a) is to understand more traditional mapping methods used in voice/accent conversion and b) serves as a baseline to be compared to other innovative methods (e.g Experiment 2).

The methodology for this experiment stems from \textcite{aryal2014}, one of the earlier works done on accent conversion.

## Tools
In order to do GMM-based accent conversion, I utilize the \texttt{nnmnwkii}\footnote{Found at: https://github.com/r9y9/nnmnkwii} Python package which provides fast and easy functions to train voice conversion systems. Alongside this package, I also utilize a number of other packages that \texttt{nnmnkwii} is dependent on, including \texttt{pysptk}, a Python wrapper for the Speech Processing Toolkit, \texttt{pyworld}, a Python wrapper for WORLD, a well-known tool for high-quality speech analysis and acoustic feature extraction, \texttt{librosa}, another package for audio analysis, and the common \texttt{scikit-learn} machine learning package for GMM training.  



# Experiment 2: I-vector based accent conversion

This experiment is motivated by the works presented in \textcite{wu2016} and \textcite{kinnunen2017}. Due to their flexible nature, i-vectors are an appropriate method to capture the representation of an accent in a compact way. 

## Tools
In order to do the i-vector based accent conversion, I first utilized the \texttt{SIDEKIT} Python toolkit to extract the MFCCs, create a GMM (also known as a universal background model) and then the i-vectors to represent each accent. 
