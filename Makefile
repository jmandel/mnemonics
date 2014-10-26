all: wordsfile

dictdir:
	mkdir -p vendor

dictfile: dictdir
	wget https://svn.code.sf.net/p/cmusphinx/code/trunk/cmudict/cmudict.0.7a -O vendor/cmudict.0.7a

wordsfile: dictfile
	lein run -m major-system.prepare > resources/public/words-by-number.edn
