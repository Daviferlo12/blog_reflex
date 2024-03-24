import reflex as rx
from web_python.components.navbar import navbar
from web_python.components.footer import footer
from web_python.views.header.header import header
from web_python.views.links.links import links
import web_python.styles.styles as styles
from web_python.styles.styles import Size

class State(rx.State):
    pass


def index() -> rx.Component:
    return rx.box(
        navbar(),
        rx.center(
            rx.vstack(
                header(),
                links(),
                max_width = styles.MAX_WIDTH,
                width= "100%",
                margin_y = Size.BIG.value
            )
        ),
        footer()
    )
     
app = rx.App(
    style= styles.BASE_STYLE
)
app.add_page(index)