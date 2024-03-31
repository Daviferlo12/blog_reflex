import reflex as rx
import web_python.styles.styles as styles
from web_python.styles.styles import Size
from web_python.styles.colors import text_color
from web_python.styles.colors import Color


def navbar() -> rx.Component:
    return rx.hstack(
        
        rx.box(
            rx.chakra.span("DAVI", color=Color.PRIMARY.value),
            rx.chakra.span("FERLO", color = Color.SECONDARY.value)
        ),

        position = "sticky",
        bg= Color.CONTENT.value,
        padding_x = Size.BIG.value,
        padding_y = Size.DEFAULT.value,
        z_index = "999",
        top = "0"
    )