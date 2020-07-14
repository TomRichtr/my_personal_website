from django import forms
from .models import Message

class BoardMessage (forms.ModelForm):

    def __init__(self, *args, **kwargs):
       super(BoardMessage, self).__init__(*args, **kwargs)
       self.fields['created_date'].widget.attrs['readonly'] = True
       self.fields['text'].widget.attrs={'id': 'textfield','placeholder': 'Please write your message here.','class':'col-sm form-field',}
       self.fields['email'].widget.attrs={'id': 'emailfield','placeholder': 'example@example.com','class':'col-sm form-control',}

    class Meta:
        model = Message
        fields = ("email","text","created_date")
