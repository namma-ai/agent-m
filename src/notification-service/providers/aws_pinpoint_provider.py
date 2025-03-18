import boto3
from utils.helpers.notification_helper import NotificationHelper
from utils.constants.provider_constants import AWS_PIN_POINT_PROVIDER
from utils.constants.client_constants import PIP_POINT_CLIENT
class AWSPinpointProvider():
    def __init__(self):
        self.client = boto3.client(PIP_POINT_CLIENT)
        self.notofication_helper = NotificationHelper()
        self.application_id = None # This should be set to the application id of the pinpoint application

    def send_email(self, recipient: str, source: str, subject: str, body: str):
        email_message = self.notofication_helper.create_email(
            provider=AWS_PIN_POINT_PROVIDER,
            source=source,
            recipient=recipient,
            subject=subject,
            body=body
        )
        try:
            response = self.client.send_email(
                ApplicationId=self.application_id,
                **email_message
            )
            return response
        except Exception as e:
            return e

    def send_sms(self, recipient: str, source: str, message: str, phone_number: str):
        sms_message = self.notofication_helper.create_sms(
            provider= AWS_PIN_POINT_PROVIDER,
            source=source,
            recipient=recipient,
            message=message,
            phone_number=phone_number
        )
        try:
            response = self.client.send_messages(
                ApplicationId=self.application_id,
                MessageRequest= sms_message
            )
            return response
        except Exception as e:
            return e
    