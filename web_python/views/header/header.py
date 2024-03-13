import reflex as rx 

def header() -> rx.Component:
    return rx.vstack(
        rx.avatar(fallback="RX", size="5")
    )