.PHONY: install clean build alpha-version alpha-publish current-version current-publish

install:
	npm install

clean:
	npm run clean

build:
	npm run build

alpha-version:
	npm version prerelease --preid=alpha --no-git-tag-version

alpha-publish: alpha-version
	npm publish --tag alpha

current-version:
	npm version --no-git-tag-version

current-publish: current-version
	npm publish
