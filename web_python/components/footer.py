import reflex as rx
import datetime
import web_python.styles.styles as styles
from web_python.styles.styles import Size
from web_python.styles.colors import text_color
from web_python.styles.colors import Color


def footer() -> rx.Component:
    return rx.vstack(
        rx.image(
            src="/logo_sin_fondo.png",
            height=Size.VERY_BIG.value
        ),
        rx.text(
            f"© {datetime.date.today().year} David Lopez 😁",
            font_size=Size.MEDIUM.value,
            margin_bottom=Size.BIG.value,
            margin_top = Size.ZERO.value
            ), 
        align="center",
        color= text_color.FOOTER.value
    )