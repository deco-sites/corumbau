export function Placeholder(
    { height, class: _class }: { height: string; class?: string },
) {
    return (
        <div
            style={{
                height,
                containIntrinsicSize: height,
                contentVisibility: "auto",
            }}
            class={`flex justify-center ${_class}`}
        >
        </div>
    );
}
