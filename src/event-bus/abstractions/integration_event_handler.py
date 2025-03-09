from abc import ABC, abstractmethod
from events import integration_event

class integration_event_handler[TIntegrationEvent:(integration_event)](ABC):
    @abstractmethod
    async def handle(self, event: TIntegrationEvent):
        pass
    @abstractmethod
    async def handle(self, event: integration_event):
        pass
