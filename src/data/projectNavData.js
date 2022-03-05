const projectNavData = {
    tot: {
        next: "/forgive",
        nextText: "'Forgive' poster series"
    },
    forgive: {
        next: "/lynk",
        prev: "/tot",
        nextText: "'LYNK' brand identity",
        prevText: "Tunnel of Trees brand identity"
    },
    lynk: {
        next: "/manic",
        prev: "/forgive",
        nextText: "'Manic' poster series",
        prevText: "'Forgive' poster series"
    },
    manic: {
        prev: "/lynk",
        prevText: "'LYNK' brand identity"
    }
}

export default projectNavData;