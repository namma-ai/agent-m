from sendgrid.helpers.mail import Mail
from utils.constants.provider_constants import AWS_PIN_POINT_PROVIDER, SEND_GRID_PROVIDER
class NotificationHelper:

    @staticmethod
    def create_email(provider, source, recipient,subject, body):
        '''Creates an email message formatted for the provider'''
        if provider == SEND_GRID_PROVIDER:
            return Mail(
                from_email=source,
                to_emails=recipient,
                subject=subject,
                plain_text_content=body)
        elif provider == AWS_PIN_POINT_PROVIDER:
            return {
                'Destination': {
                    'ToAddresses': [
                        recipient,
                    ],
                },
                'Content': {
                    'Simple': {
                        'Subject': {'Data': subject},
                        'Body': {'Text': {'Data': body}}
                    }
                },
                'FromAddress': source
            }
            
        else:
            raise ValueError('Invalid provider')
        
    @staticmethod
    def create_sms(provider, source, recipient, message, phone_number):
        '''Creates an SMS message formatted for the provider'''
        if provider == 'twilio':
            return {
                'from': source,
                'to': recipient,
                'body': message
            }
        elif provider == 'aws_pinpoint':
             return {
                'Addresses': {phone_number: {'ChannelType': 'SMS'}},
                'MessageConfiguration': {
                    'SMSMessage': {
                        'Body': message,
                        'MessageType': 'TRANSACTIONAL'
                    }
                }
            }
        else:
            raise ValueError('Invalid provider')
