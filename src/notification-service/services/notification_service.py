from providers.sendgrid_provider import SendGridProvider
from providers.aws_pinpoint_provider import AWSPinpointProvider
from utils.constants.provider_constants import AWS_PIN_POINT_PROVIDER, SEND_GRID_PROVIDER


class NotificationService:
    """Manages notifications using different providers."""
    
    def __init__(self, provider: str):
        if provider == SEND_GRID_PROVIDER:
            self.provider = SendGridProvider()
        elif provider == AWS_PIN_POINT_PROVIDER:
            self.provider = AWSPinpointProvider()
        else:
            raise ValueError("Invalid provider specified.")

    def send_email(self, to_email, subject, body):
        """Sends email using the selected provider."""
        return self.provider.send_email(to_email, subject, body)

    def send_sms(self, phone_number, message):
        """Sends SMS using the selected provider (if supported)."""
        return self.provider.send_sms(phone_number, message)