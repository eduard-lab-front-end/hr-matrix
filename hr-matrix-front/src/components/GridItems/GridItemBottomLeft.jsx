const GridItemBottomLeft = () => {
  return (
    <div className="w-full h-full p-4 border rounded flex items-center justify-around lg:flex-row gap-8 divide-y lg:divide-x">
      <div className="w-full h-full lg:w-1/3 flex flex-col gap-1 justify-center items-center">
        <p className="text-sm text-muted-foreground">
          Your Onloadend User Amount
        </p>
        <p className="text-3xl font-bold">235.332</p>
      </div>
      <div className="h-full w-full Ig:w-1/3 flex items-center justify-center gap-2 lg:gap-4">
        <div className="flex flex-col gap-1">
          <p className="text-sm text-muted-foreground">Basis</p>
          <p className="text-3xl font-bold">42%</p>
        </div>
        <div className="flex flex-col gap-1">
          <p className="text-sm text-muted-foreground">Premium</p>
          <p className="text-3xl font-bold">24%</p>
        </div>
        <div className="flex flex-col gap-1">
          <p className="text-sm text-muted-foreground">Premium +</p>
          <p className="text-3xl font-bold">34%</p>
        </div>
      </div>
      <div className="h-full w-full lg:w-1/3 flex items-center justify-center gap-2 lg:gap-4">
        <div className="flex flex-col gap-1">
          <p className="text-sm text-muted-foreground">Men</p>
          <p className="text-3xl font-bold">44%</p>
        </div>
        <div className="flex flex-col gap-1">
          <p className="text-sm text-muted-foreground">Women</p>
          <p className="text-3xl font-bold">56%</p>
        </div>
      </div>
    </div>
  );
};

export default GridItemBottomLeft;
