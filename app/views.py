from flask import Blueprint, render_template
from .proxy import proxy_request

app_views = Blueprint('app_views', __name__)

@app_views.route('/')
def home():
    return render_template('index.html')

@app_views.route('/proxy_tomtom')
def proxy_tomtom():
    url = "https://tti-cancun.tomtomgroup.com/"
    return proxy_request(url)