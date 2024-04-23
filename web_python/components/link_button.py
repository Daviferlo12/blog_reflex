import reflex as rx
import web_python.styles.styles as styles
from web_python.styles.styles import Size


def link_button(title : str, body : str , url: str, image_ico : str, disable = True) -> rx.Component:
    
    return rx.link(
        rx.button(
            rx.hstack(
                rx.image(
                    src = image_ico,
                    width = Size.LARGE.value,
                    height = Size.LARGE.value,
                    margin = Size.LARGE.value,
                    alt = title
                ),
                rx.vstack(
                    rx.text(title, style= styles.botton_title_style),
                    rx.text(body, style=styles.botton_body_style),
                    spacing="2",
                    align_items = "start",
                    margin = Size.ZERO.value,
                    padding_y = Size.SMALL.value,
                    padding_right = Size.SMALL.value
                ),
                width = "100%"
            ),
        ),
        href=url,
        is_external = disable,
        width = "100%"
    )