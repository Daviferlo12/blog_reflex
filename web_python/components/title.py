import reflex as rx
import web_python.styles.styles as styles
from web_python.styles.styles import Size

def title(text) -> rx.Component:
    return rx.heading(
        text,
        size="5",
        style=styles.title_style
    )