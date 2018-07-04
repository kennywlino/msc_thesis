\cleardoublepage

\chapter{Background}
Before delving into previous literature and their relevance to this work and the field of NLP/language learning as a whole, I detail voice conversion/accent conversion and common speech technology concepts used in these systems in order to make the current work more accessible to those unfamiliar with the area. 


# Voice conversion
To properly frame voice conversion, we take a look at \textcite{mohammadi2017} who present a recent overview of the subfield. Following a definition setforth by the authors, voice conversion refers to the transformation of a speech signal of a *target speaker* to make it sound similar to a *source speaker* in any chosen fashion with the utterance still being intact. Some of these changes can include changes in emotion, accent, or phonation (whispered/murmured speech). there have been a number of proposed uses for VC, including the transformation of speaker identity (perhaps for voice dubbing), personalized TTS systems, and against biometric voice authentication systems. 

Voice conversion often involves a large number of processes, one of which includes deciding the appropriate type of data. To start, one must decide whether to have parallel or non-parallel speech data. Parallel speech data refers to speech data that has source and reference speakers that say the same utterance, so only the speaker information is different, while non-parallel data would indicate datasets where the utterances are not the same, and thus entail further processes to create a target waveform. Even though parallel corpora is more desirable as it reduces the footprint necessary for conversion, parallel corpora is often curated for specific purposes and is not available in most cases. 

Because of its simplicity, in some cases, researchers have tested making a psuedo-parallel corpus using acoustic clustering when working with non-parallel data \parencite{lorenzo-trueba2018}. [Should I cite the original paper here instead if I'm not going into detail? sundermann 2018]

Other aspects that need to be considered as discussed by \textcite{mohammadi2017} include whether the data is *text-dependent* or *text-independent*. Text-dependent corpora indicates that the data has word or phonetic transcription, which can ease the alignment process during training, while systems using text-independent data would need to find similar speech segments, using algorithms such as clustering before training. Finally, one minor aspect that is not considered often is the languages of the source speaker and target speaker. Although many systems tend to focus on voice conversion between two native speakers of the same language, systems that aim to convert between two speakers speaking in different languages would have to be wary of potential mapping issues between sounds. This is especially important to consider in terms of accent conversion, which will be discussed in the next section.

Aside from considering these aspects of the corpora, the type of features extracted from the waveforms heavily impact the quality of the conversions. In investigating the most salient features of speaker individuality, previous researchers have concluded that the average spectrum, formants, and average pitch level are the most relevant. Following these conclusions, most VC systems focus on converting these features, and often work at the frame-level (windows of ~20ms), with the assumption that the frame represents a stationary sound. From these frames, there a number of common *local* features that are extracted to represent the speech. These include the spectral envelope, cepstrum, line spectral frequencies (LSF) and the aforementioned formants. In particular, working with the mel-frequency cepstrum coefficents (MFCCs) are very standard in not just voice conversion systems, but most speech synthesis and recogntion systems in general. These are described in further detail in the section titled [FEATURES?; add label here to add easy click.]



On top of these local frame-based features, contextual features can be considered as well, although this would entail further fine-tuning of the features and system. [expand] 

A visual representation that summarizes the voice conversion process can be seen in \autoref{fig:vc-flowchart}, courtesy of \textcite{mohammadi2017}.

\begin{figure}[H]
\centering
\includegraphics[scale=0.25]{img/vc-flowchart.png}
\caption{The training and conversion processes of a typical VC system.}
\label{fig:vc-flowchart}
\end{figure} 


# Accent conversion
Like voice conversion, accent conversion is dedicated to convert the speech of a *target speaker* into sounding more like a *source speaker*. However, accent conversion is specifically focused on morphing the *accent* of the speech signal, as opposed to sounding directly like the source speaker. Succinctly stated, "Accent conversion seeks to transform second language L2 utterances to appear as if produced with a native (L1) accent," \parencite{aryal2014a}. Accent conversion poses a further challenge on top of (parallel) voice conversion as the audio of the source speaker and target speaker is often forced-aligned. This means that with native and non-native speech, voice conversion would retain the voice quality and accent of the target speaker \parencite{aryal2014}. 


# Features
\subsection{Mel-frequency cepstrum coefficient}
Following \textcite{jurafsky} (NOT REAL CITATION FIX IT), 
mel-frequency cepstrum coefficients (MFCCs) allow us to create vectorized representation of the acoustic information. 

This is done by going over the speech signal using _windows_, where each window is assumed to contain a non-changing part of the signal. In order words, each window would roughly contain one phone-- or speech sound. In order to retain all of the necessary information from each part of the signal, the windows often overlap. 

After the signal is separated into different windows, the spectral information can be extracted using a special tool or formula known as the Discrete Fourier Transform. This allows us to find how much energy is in specific frequency bands.

From here the frequencies outputted by the Discrete Fourier Transform are converted onto the _mel_ scale, which is where the _mel_ in Mel-frequency comes from. In short, the mel scale is used to represent human hearing, which is more sensitive to lower pitch sounds (under 1000hz) as compared to higher pitch sounds. 


Afterwards, the _cepstrum_ is calculated in order to separate source information from filter information. From a high level, the source-filter theory says that all sounds come from the glottis (the area around our throat) and below, which contains information common to all speech sounds, such as the fundamental frequency (or pitch) of someone's voice, as well as glottal pulse information. This is compared to the filter, which says that adjusting the vocal tract (e.g. moving the tongue and other articulators) define each individual sounds. By retaining just the filter information, we can model an individual phone. 


A visual representation of the whole MFCC extraction process can be seen in the following figure, taken from \textcite{jurafsky}.



Describe:
* MFCCs
* GMMs
* i-vectors
