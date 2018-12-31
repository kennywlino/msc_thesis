\cleardoublepage
\pagenumbering{arabic}
\setcounter{page}{1}

\chapter{Introduction}
\colorbox{magenta}{[Cite robustness of Alexa, Siri, Google Translate and viral videos]}

While technology has flourished and led to a number of new state-of-the-art systems such as improvements in commercial speech recognition and machine translation, it can be argued that these benefits have not reached all potential users and uses to the same extent. For example, many commercial systems like Google Translate, Siri, Alexa, etc. have grown in the number of languages they have available, but when considering the robustness of these systems across languages, it is often evident that the systems function much better with languages that have more speakers across the globe such as English or Spanish. In some cases such as with newer products, a user's native language might not yet even be available, which can cause them to relegate to English.

These systems are also often better equipped to work with specific language varieties, which are often considered to be the 'standard' or more common variety of that language. In the context of speech recognition systems, this means that this could cause potential challenges for speakers of other varieties-- or _accents_, whether it be another native but 'non-standard' accent or a non-native accent. This issue can be observed in various viral videos, such as an Italian grandmother who is trying to activate a Google Home device by saying, "Okay Google!" or another video where a woman is trying to get her Amazon Alexa device to play a song called "Something's Cooking in My Kitchen by Dana". In both cases, both women have issues with their devices properly understanding them likely because they speak English with an accent that the systems are not (well-)trained on.

Yet when it comes to accents, teaching them can be as equally difficult as trying to have them recognized by speech recognition systems. This extends into language teaching and learning as well, where learners of a second language often have trouble acquiring proper pronunciation. In fact, pronunciation has been a large standing challenge in language learning due to its complex nature. Unlike grammar and vocabulary, which many language learners acquire without issue, pronunciation can be challenging to both learn and teach due to the lack of clarity on how to teach it. This is because pronunciation involves a number of nuanced characteristics, including stress, rhythm, vowels, and consonants, which can vary just small enough for one language or accent to draw a distinction, while others conflate them. 

In order to address these issues in speech recognition and language learning, researchers have investigated variation solutions. Linguists focused on language learning and phonetics have examined the underlying causes of what creates obstacles in learning an accent, with some concluding that native-like accents are nearly unobtainable after a certain age threshold. Regardless of this conclusion, some researchers have turned to language technology to develop potential pronunciation training systems with the hopes of any possible accent reduction. Earlier studies using some of these pronunciation training systems have shown that while they have the potential, many of them suffer from the lack of appropriate feedback that the user can understand. Thus, some researchers have pointed to the potential use of accent conversion as a mode of feedback as it has been hypothesized that hearing one's voice pronounce something with the desired accent is better feedback as compared to a point system or spectrograms, which require specialized training to interpret.

Accent conversion has also been proposed as a potential solution to challenges in speech recognition. Because speech recognition is often trained on large amounts of speech data, it can be unrealistic to attempt to collect sufficient speech data for the endless possible varieties or accents that exist for a single language. Instead, researchers have pointed to accent conversion as a possible way to adapt current available systems to more speakers, with the idea that accent conversion could change the accent of a speaker into sounding more like an accent the speech recognition system can better recognize without training it on a large amount of data. This can be viewed similarly to other natural language processing tasks, such as text classification or part-of-speech tagging of varying genres such as formal news text vs. informal blogs or tweets, where currently available systems have been adapted to perform better on more genres instead of creating specialized systems for each genre type.


# What is an "accent"?

Before continuing on, it is best to define what accent is, especially in the context of this work. Accents consist of a number of features, including the vowels and consonants, the stress, rhythm, intonation, and even pauses that a speaker uses. The variation in these features contribute to what many known as _accent_, or variations in pronunciation across speakers based on location, ethnicities, social classes, native languages, etc. \colorbox{magenta}{[Cite this]} Accents can be considered to be a part of dialects, where users of the same language may have variations beyond pronunciation, such as usage in vocabulary or grammar. The line may often be blurred in everyday discussions and even in academic analyses as accent and dialect (as well as language) could be considered to be on a continuum, but for the sake of simplicity, I consider _accent_ to be variations in pronunciation in this work.


# Research Questions

In this thesis, I focus on investigating the following questions:

* How can we leverage accent conversion to change the accent of a _non-native speaker_ into sounding more like a _native speaker_?  (e.g. converting the accent of a native Spanish speaker to sound more like a US English speaker)

* How can we leverage accent conversion to change the accent of two _native speakers_ of English who speak two distinct varieties? (e.g. converting the accent of a Scottish speaker to sound more like a Standard Southern English speaker)

* To what extent can we maintain the voice characteristics of the selected speakers, or _the identity_ when converting their accents? (e.g. Can we convert the accent of a speaker and make sure it still sounds like the same person?)

# Thesis Overview
The overview of the thesis is as follows:

In **Chapter 2**, I give a proper definition of voice conversion and accent conversion, and a high level overview of some technical details needed to better understand the current work.

In **Chapter 3**, I present the motivation for creating an accent converison system by discussing previous findings in second language acquisition research especially in relation to speech. I then cover previous work in voice and accent conversion to frame the advances and shortcomings of previously developed systems.

In **Chapter 4**, the design and methodology of the experiments are presented alongside the appropriate tools utilized to conduct each one. 

In **Chapter 5**, the results of the experiments previously described are presented along with some short discussion and conclusions drawn from the results. 

In **Chapter 6**, the thesis is concluded with a reflection on the work presented along with some appropriate suggestions for future work.
