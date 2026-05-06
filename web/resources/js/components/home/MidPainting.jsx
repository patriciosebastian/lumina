export default function MidPainting() {
    return (
        <section className="bg-bg">
            <figure className="m-0">
                <img
                    src="/images/paintings/painting-mid.png"
                    alt="Two robed figures conversing in a long, gilded library hall at dusk, vaulted ceilings overhead, leaded windows on the left and tall bookcases on the right, golden light pooling on the stone floor between them."
                    width={1500}
                    height={500}
                    className="block w-full h-auto aspect-[16/7] object-cover object-[center_30%] max-md:aspect-[2/1]"
                />
                <figcaption className="mt-[22px] font-ui text-[11px] tracking-[0.26em] uppercase text-ink-2 text-center sr-only">
                    Plate II &middot; The Scriptorium at First Light
                </figcaption>
            </figure>
        </section>
    );
}
