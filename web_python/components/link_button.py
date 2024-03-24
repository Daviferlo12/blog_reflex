import reflex as rx
import web_python.styles.styles as styles
from web_python.styles.styles import Size


def link_button(title : str, body : str , color : str, url: str, disable = True) -> rx.Component:
    
    return rx.link(
        rx.button(
            rx.hstack(
                rx.icon(
                    tag = "calendar",
                    width = Size.BIG.value,
                    height = Size.BIG.value
                ),
                rx.vstack(
                    rx.text(title, style= styles.botton_title_style),
                    rx.text(body, style=styles.botton_body_style),
                    align_items = "start"
                )
            ),
            color_scheme=color
        ),
        href=url,
        is_external = disable,
        width = "100%"
    )