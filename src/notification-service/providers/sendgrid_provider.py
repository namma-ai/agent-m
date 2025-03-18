from sendgrid import SendGridAPIClient
from utils.helpers.notification_helper import NotificationHelper
from utils.constants.provider_constants import SEND_GRID_PROVIDER
class SendGridProvider:
    
    def __init__(self, api_key: str):
        self.api_key = api_key
        self.notification_helper = NotificationHelper()
        self.send_grid_client = SendGridAPIClient(self.api_key)
    
    def send_email(self, recipient: str, source: str,subject: str, body: str):
        email_message = self.notification_helper.create_email(
            provider= SEND_GRID_PROVIDER,
            source=source,
            recipient=recipient,
            subject=subject,
            body=body
        )
        try:
            response = self.send_grid_client.send(email_message)
            return response.status_code
        except Exception as e:
            return e
    
