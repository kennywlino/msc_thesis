\cleardoublepage
\pagenumbering{arabic}
\setcounter{page}{1}

\chapter{Introduction}

# What is an "accent"?

Before continuing on, it is best to define what accent is, especially in the context of this work. The definition of 'accent', much like any other word can fluctuate based on the context it is used in, and by whom the word is used. Fundamentally, accents consist of a number of features, including the vowels and consonants, the stress, rhythm, intonation, and even pauses that a speaker uses. The variation in these features contribute to what many known as _accent_, or variations in pronunciation across speakers based on location, ethnicities, social classes, native languages, etc \parencite{crystal2008}. Accents can be considered to be a part of dialects, where users of the same language may have variations beyond pronunciation, such as usage in vocabulary or grammar. The line between accents and dialects may often be blurred in everyday discussions and even in academic analyses as accent and dialect (as well as language) could be considered to be on a continuum, but for the sake of simplicity, we consider 'accent' to be solely variations in pronunciation in this work.

# Motivation for this work

Technology has flourished and led to a number of new state-of-the-art systems such as improvements in commercial speech recognition and machine translation. However, it can be argued that these benefits have not reached all potential users and uses to the same extent. For example, many commercial systems like Google Translate, Siri, Alexa, etc. have grown in the number of languages they have available, but when considering the robustness of these systems across languages, it is often evident that the systems function much better with languages that have more speakers across the globe such as English or Spanish. In some cases such as with newer products, a user's native language might not yet even be available, which can cause them to relegate to English.

These systems are also often better equipped to work with specific language varieties, which are often considered to be the 'standard' or more common variety of that language. In the context of speech recognition systems, this means that this could cause potential challenges for speakers of other varieties-- or _accents_, whether it be another native but 'non-standard' accent or a non-native accent. This issue can be observed in various viral videos, such as an Italian grandmother who is trying to activate a Google Home device by saying, "Okay Google!" \parencite{actis2017} or another video where a woman is trying to get her Amazon Alexa device to play a song called "Something's Cooking in My Kitchen by Dana" \parencite{newsflare2018}. In both cases, both women have issues with their devices properly understanding them likely because they speak English with an accent that the systems are not (well-)trained on.

Yet when it comes to accents, teaching them can be as equally difficult as trying to have them recognized by speech recognition systems. This extends into language teaching and learning as well, where learners of a second language often have trouble acquiring proper pronunciation. In fact, pronunciation has been a large standing challenge in language learning due to its complex nature as observed in second language learning research \parencite{lenneberg1967a, scovel1988a, flege1995}. Unlike grammar and vocabulary, which many language learners acquire without issue, pronunciation can be challenging to both learn and teach due to the lack of clarity on how to teach it \parencite{darcy2012}. This is because pronunciation involves a number of nuanced characteristics, including stress, rhythm, vowels, and consonants, which can vary just small enough for one language or accent to draw a distinction, while others conflate them. 

In order to address these issues in speech recognition and language learning, researchers have investigated variation solutions. Linguists focused on language learning and phonetics have examined the underlying causes of what creates obstacles in learning an accent, with some concluding that native-like accents are nearly unobtainable after a certain age threshold. Regardless of this conclusion, some researchers have turned to language technology to develop potential pronunciation training systems with the hopes of any possible accent reduction. Earlier studies using some of these pronunciation training systems have shown that while they have the potential, many of them suffer from the lack of appropriate feedback that the user can understand. Thus, some researchers have pointed to the potential use of accent conversion as a mode of feedback as it has been hypothesized that hearing one's voice pronounce something with the desired accent is better feedback as compared to a point-based system or spectrograms, which require specialized training to interpret.

Accent conversion has also been proposed as a potential solution to challenges in speech recognition. Because speech recognition is often trained on large amounts of speech data, it can be unrealistic to attempt to collect sufficient speech data for the endless possible varieties or accents that exist for a single language. Instead, researchers have pointed to accent conversion as a possible way to adapt current available systems to more speakers, with the idea that accent conversion could change the accent of a speaker into sounding more like an accent the speech recognition system can better recognize without training it on a large amount of data. Similarly, accent conversion can be applied to expand the number of available accents for text-to-speech systems for languages that may have a large number of accents such as English or Spanish. This adaptation process can be viewed similarly to other natural language processing tasks, such as text classification or part-of-speech tagging of varying genres such as formal news text vs. informal blogs or tweets, where currently available systems have been adapted to perform better on more genres instead of creating specialized systems for each genre type. 


# Research Questions

In this thesis, we focus on investigating the following questions:

* How effective is accent conversion in changing the accent of a _non-native speaker_ into sounding more like a _native speaker_ while retaining their voice characteristics, or _identity_? Concretely, how effectively can we convert the accents of learners of English to sound more like US English while retaining their identities?

* How effective is accent conversion to change the accent of two _native speakers_ of English who speak two _distinct_ varieties? Specifically, how effectively can we convert the accents of speakers of 'non-standard' English such as speakers from Scotland, to sound more like Standard Southern English while retaining their identities? 

* Does the same methodology of accent conversion which is most often applied to the conversion of non-native to native accents work similarly for native to native accent conversion? Concretely, would we observe similar performance between non-native to native accent conversion vs. native to native accent conversion? 


# Thesis Overview
The overview of the thesis is as follows:

In **Chapter 2**, we give a proper definition of voice conversion and accent conversion, and a high level overview of some technical details needed to better understand the current work.

In **Chapter 3**, we present the motivation for creating an accent conversion system by discussing previous findings in second language acquisition research especially in relation to speech. We then cover previous work in voice and accent conversion to frame the advances and shortcomings of previously developed systems.

In **Chapter 4**, the design and methodology of the experiments are presented alongside the appropriate tools utilized to conduct each one. 

In **Chapter 5**, the results of the experiments previously described are presented along with some short discussion and conclusions drawn from the results. 

In **Chapter 6**, the thesis is concluded with a reflection on the work presented along with some appropriate suggestions for future work.
