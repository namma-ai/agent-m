import uuid
from datetime import datetime
from dataclasses import dataclass, field

@dataclass
class integration_event:
    Id: uuid.UUID = field(default_factory=uuid.uuid4)
    CreationDate: datetime = field(default_factory=datetime.utcnow)

