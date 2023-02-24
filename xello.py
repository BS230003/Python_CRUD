import feedparser
from flask import Flask 

print ("\nLine 2 Hello Python World..")
Feed = feedparser.parse('http://www.reddit.com/r/python/.rss')
pointer = Feed.entries[1]
print (" summary: " + pointer.summary)
print ("\n link " + pointer.link)


app = Flask(__name__)
print ("app created. ")

@app.route('/')
def hello():
    return 'Hello, World!'
