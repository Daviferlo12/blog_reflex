import reflex as rx
import web_python.styles.styles as styles
from web_python.styles.styles import Size


def navbar() -> rx.Component:
    return rx.hstack(
        rx.text(
            "DAVIFERLO"
        ),
        position = "sticky",
        bg="lightgray",
        padding_x = Size.DEFAULT.value,
        padding_y = Size.SMALL.value,
        z_index = "999",
        top = "0"
    )