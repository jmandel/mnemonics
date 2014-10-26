all: wordsfile

dictdir:
	mkdir -p vendor

dictfile: dictdir
	wget https://svn.code.sf.net/p/cmusphinx/code/trunk/cmudict/cmudict.0.7a -O vendor/cmudict.0.7a

wordsfile: dictfile
	lein run -m major-system.prepare > resources/public/words-by-number.edn

build-release:
	lein cljsbuild once release

release: build-release
	mkdir -p /tmp/public-major/js
	cp -r resources/public/css /tmp/public-major
	cp -r resources/public/index.html /tmp/public-major
	cp -r resources/public/js/worker-prod.js /tmp/public-major/js
	cp -r resources/public/major_system_prod.js* /tmp/public-major
	cp -r resources/public/prod-out /tmp/public-major
	git checkout gh-pages
	cp -r /tmp/public-major/* .
	rm -rf /tmp/public-major
