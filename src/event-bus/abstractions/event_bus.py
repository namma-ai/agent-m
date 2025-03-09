from abc import ABC, abstractmethod
import asyncio
from abstractions import event_bus_subscription_info
class event_bus(ABC):
    
    @abstractmethod
    async def publish_async(self, event):
        pass

