from datetime import datetime, timedelta


def default_end():
    return datetime.now() + timedelta(seconds=43200)
