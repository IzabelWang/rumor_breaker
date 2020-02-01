function e(e, t, i, o) {
    this.position = new s.Vector3(), this.previous = new s.Vector3(), this.original = new s.Vector3(), 
    this.a = new s.Vector3(0, 0, 0), this.mass = o, this.invMass = 1 / o, this.tmp = new s.Vector3(), 
    this.tmp2 = new s.Vector3(), u(e, t, this.position), u(e, t, this.previous), u(e, t, this.original);
}

function t(e, t, i) {
    x.subVectors(t.position, e.position);
    var o = x.length();
    if (0 !== o) {
        var a = x.multiplyScalar(1 - i / o).multiplyScalar(.5);
        e.position.add(a), t.position.sub(a);
    }
}

function i(e) {
    if (r) {
        var i, o, a, n, d, h, p;
        if (l.enableWind) {
            var c, w = new s.Vector3(), u = G.index, V = G.attributes.normal;
            for (n = m.particles, i = 0, a = u.count; i < a; i += 3) for (o = 0; o < 3; o++) c = u.getX(i + o), 
            w.fromBufferAttribute(V, c), b.copy(w).normalize().multiplyScalar(w.dot(y)), n[c].addForce(b);
        }
        for (i = 0, a = (n = m.particles).length; i < a; i++) (d = n[i]).addForce(f), d.integrate(v);
        for (a = (h = m.constraints).length, i = 0; i < a; i++) t((p = h[i])[0], p[1], p[2]);
        if (M.z = 90 * -Math.sin(Date.now() / 600), M.x = 70 * Math.cos(Date.now() / 400), 
        l.showBall) for (L.visible = !0, i = 0, a = (n = m.particles).length; i < a; i++) {
            var B = (d = n[i]).position;
            x.subVectors(B, M), x.length() < S && (x.normalize().multiplyScalar(S), B.copy(M).add(x));
        } else L.visible = !1;
        for (i = 0, a = (n = m.particles).length; i < a; i++) (B = (d = n[i]).position).y < -250 && (B.y = -250);
        for (i = 0, a = g.length; i < a; i++) {
            var P = n[g[i]];
            P.position.copy(P.original), P.previous.copy(P.original);
        }
    } else r = e;
}

function o() {
    j.aspect = window.innerWidth / window.innerHeight, j.updateProjectionMatrix(), D.setSize(window.innerWidth, window.innerHeight);
}

function a() {
    requestAnimationFrame(a);
    var e = Date.now(), t = 20 * Math.cos(e / 7e3) + 40;
    y.set(Math.sin(e / 2e3), Math.cos(e / 3e3), Math.sin(e / 1e3)), y.normalize(), y.multiplyScalar(t), 
    i(e), n(), P.update();
}

function n() {
    for (var e = m.particles, t = 0, i = e.length; t < i; t++) {
        var o = e[t].position;
        G.attributes.position.setXYZ(t, o.x, o.y, o.z);
    }
    G.attributes.position.needsUpdate = !0, G.computeVertexNormals(), L.position.copy(M), 
    D.render(z, j);
}

var r, s = function(e) {
    if (e && e.__esModule) return e;
    var t = {};
    if (null != e) for (var i in e) Object.prototype.hasOwnProperty.call(e, i) && (t[i] = e[i]);
    return t.default = e, t;
}(require("../build/three.module.js")), d = function(e) {
    return e && e.__esModule ? e : {
        default: e
    };
}(require("./jsm/libs/stats.module.js")), h = require("./jsm/libs/dat.gui.module.js"), p = require("./jsm/controls/OrbitControls.js"), l = {
    enableWind: !0,
    showBall: !1,
    tooglePins: function() {
        g = V[~~(Math.random() * V.length)];
    }
}, c = .1, w = 25, u = function(e, t) {
    return function(i, o, a) {
        var n = (i - .5) * e, r = (o + .5) * t;
        a.set(n, r, 0);
    };
}(10 * w, 10 * w), m = new function(t, i) {
    function o(e, i) {
        return e + i * (t + 1);
    }
    t = t || 10, i = i || 10, this.w = t, this.h = i;
    var a, n, r = [], s = [];
    for (n = 0; n <= i; n++) for (a = 0; a <= t; a++) r.push(new e(a / t, n / i, 0, c));
    for (n = 0; n < i; n++) for (a = 0; a < t; a++) s.push([ r[o(a, n)], r[o(a, n + 1)], w ]), 
    s.push([ r[o(a, n)], r[o(a + 1, n)], w ]);
    for (a = t, n = 0; n < i; n++) s.push([ r[o(a, n)], r[o(a, n + 1)], w ]);
    for (n = i, a = 0; a < t; a++) s.push([ r[o(a, n)], r[o(a + 1, n)], w ]);
    this.particles = r, this.constraints = s, this.index = o;
}(10, 10), f = new s.Vector3(0, -981 * 1.4, 0).multiplyScalar(c), v = .018 * .018, g = [], y = new s.Vector3(0, 0, 0), M = new s.Vector3(0, -45, 0), S = 60, b = new s.Vector3();

e.prototype.addForce = function(e) {
    this.a.add(this.tmp2.copy(e).multiplyScalar(this.invMass));
}, e.prototype.integrate = function(e) {
    var t = this.tmp.subVectors(this.position, this.previous);
    t.multiplyScalar(.97).add(this.position), t.add(this.a.multiplyScalar(e)), this.tmp = this.previous, 
    this.previous = this.position, this.position = t, this.a.set(0, 0, 0);
};

var x = new s.Vector3(), V = [], g = [ 6 ];

V.push(g), g = [ 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10 ], V.push(g), g = [ 0 ], V.push(g), 
g = [], V.push(g), g = [ 0, m.w ], V.push(g), g = V[1];

var B, P, j, z, D, G, L, W;

!function() {
    B = document.createElement("div"), document.body.appendChild(B), (z = new s.Scene()).background = new s.Color(13426943), 
    z.fog = new s.Fog(13426943, 500, 1e4), (j = new s.PerspectiveCamera(30, window.innerWidth / window.innerHeight, 1, 1e4)).position.set(1e3, 50, 1500), 
    z.add(new s.AmbientLight(6710886));
    var e = new s.DirectionalLight(14674943, 1);
    e.position.set(50, 200, 100), e.position.multiplyScalar(1.3), e.castShadow = !0, 
    e.shadow.mapSize.width = 1024, e.shadow.mapSize.height = 1024;
    var t = 300;
    e.shadow.camera.left = -t, e.shadow.camera.right = t, e.shadow.camera.top = t, e.shadow.camera.bottom = -t, 
    e.shadow.camera.far = 1e3, z.add(e);
    var i = new s.TextureLoader(), a = i.load("textures/patterns/circuit_pattern.png");
    a.anisotropy = 16;
    var n = new s.MeshLambertMaterial({
        map: a,
        side: s.DoubleSide,
        alphaTest: .5
    });
    G = new s.ParametricBufferGeometry(u, m.w, m.h), (W = new s.Mesh(G, n)).position.set(0, 0, 0), 
    W.castShadow = !0, z.add(W), W.customDepthMaterial = new s.MeshDepthMaterial({
        depthPacking: s.RGBADepthPacking,
        map: a,
        alphaTest: .5
    });
    var r = new s.SphereBufferGeometry(S, 32, 16), c = new s.MeshLambertMaterial();
    (L = new s.Mesh(r, c)).castShadow = !0, L.receiveShadow = !0, L.visible = !1, z.add(L);
    var w = i.load("textures/terrain/grasslight-big.jpg");
    w.wrapS = w.wrapT = s.RepeatWrapping, w.repeat.set(25, 25), w.anisotropy = 16;
    var f = new s.MeshLambertMaterial({
        map: w
    }), v = new s.Mesh(new s.PlaneBufferGeometry(2e4, 2e4), f);
    v.position.y = -250, v.rotation.x = -Math.PI / 2, v.receiveShadow = !0, z.add(v);
    var g = new s.BoxBufferGeometry(5, 375, 5), y = new s.MeshLambertMaterial();
    (v = new s.Mesh(g, y)).position.x = -125, v.position.y = -62, v.receiveShadow = !0, 
    v.castShadow = !0, z.add(v), (v = new s.Mesh(g, y)).position.x = 125, v.position.y = -62, 
    v.receiveShadow = !0, v.castShadow = !0, z.add(v), (v = new s.Mesh(new s.BoxBufferGeometry(255, 5, 5), y)).position.y = 125, 
    v.position.x = 0, v.receiveShadow = !0, v.castShadow = !0, z.add(v);
    var M = new s.BoxBufferGeometry(10, 10, 10);
    (v = new s.Mesh(M, y)).position.y = -250, v.position.x = 125, v.receiveShadow = !0, 
    v.castShadow = !0, z.add(v), (v = new s.Mesh(M, y)).position.y = -250, v.position.x = -125, 
    v.receiveShadow = !0, v.castShadow = !0, z.add(v), (D = new s.WebGLRenderer({
        antialias: !0
    })).setPixelRatio(window.devicePixelRatio), D.setSize(window.innerWidth, window.innerHeight), 
    B.appendChild(D.domElement), D.gammaInput = !0, D.gammaOutput = !0, D.shadowMap.enabled = !0;
    var b = new p.OrbitControls(j, D.domElement);
    b.maxPolarAngle = .5 * Math.PI, b.minDistance = 1e3, b.maxDistance = 5e3, P = new d.default(), 
    B.appendChild(P.dom), window.addEventListener("resize", o, !1);
    var x = new h.GUI();
    x.add(l, "enableWind"), x.add(l, "showBall"), x.add(l, "tooglePins");
}(), a();