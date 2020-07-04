function MapFactory()
{
    this.maps = [];
    this.maps.push(SearchMap);
    this.getMap = function(cols, rows, x, y, w, h, permitdiagonals, percentWalls)
    {
        if(this.maps.length == 0) return undefined;

        var selected = floor(random(this.maps.length));
        return new this.maps[selected](cols, rows, x, y, w, h, permitdiagonals, percentWalls);
    }
}
