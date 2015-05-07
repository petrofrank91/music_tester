from django.conf.urls import patterns, url

from music_tester.views import IndexView, TrackerView

urlpatterns = patterns(
    '',
    url(r'^tracker/$', TrackerView.as_view(), name='tracker'),
    url(r'^.*$', IndexView.as_view(), name='index'),
)
