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
                    margin = Size.MEDIUM.value
                ),
                rx.vstack(
                    rx.text(title, style= styles.botton_title_style),
                    rx.text(body, style=styles.botton_body_style),
                    spacing="0",
                    align_items = "start",
                    margin = Size.ZERO.value
                )
            ),
        ),
        href=url,
        is_external = disable,
        width = "100%"
    )