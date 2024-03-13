import reflex as rx
from web_python.components.navbar import navbar
from web_python.views.header.header import header


class State(rx.State):
    pass


def index() -> rx.Component:
    return rx.vstack(
        navbar(),
        header()
    )



app = rx.App()
app.add_page(index)