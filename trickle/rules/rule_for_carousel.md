When implementing carousels
- Always double check the transform calculation math.
- For % based transforms on a track wider than 100%, remember that `translateX(-100%)` moves the element by 100% of ITS OWN width, not the parent's.
- Correct formula for infinite track: `translateX(-(currentIndex * 100) / totalItemsInTrack %)`