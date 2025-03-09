from typing import Dict, Type
from json import JSONDecoder, JSONEncoder

class event_bus_subscription_info:
    def __init__(self):
        self.event_types: Dict[str, Type] = {}
        

