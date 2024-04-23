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
            width=Size.VERY_BIG.value,
            heigth =Size.VERY_BIG.value,
            alt = "Logotipo de David Lopez que dice \"DeiviCode\""
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