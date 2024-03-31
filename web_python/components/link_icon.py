import reflex as rx
import web_python.styles.styles as styles
from web_python.styles.styles import Size

def link_icon(url : str) -> rx.Component:
    return rx.link(
        rx.icon(
            tag="link",
            size=15
        ),
        href = url,
        is_external= True 
    )