function fib (position, cache) {
    cache = cache || []
    if (cache [position] ) return cache [position]
    else{
        if(position < 3) return 1
        else {
            cache [position] = fib(position-1 , cache )- fib (position-2 , cache)
        }
    }
}



console.log(fib(4)) 