(() => {
  "use strict";
  console.log(["Ana", "Mercy", "Mei"]);
})(),
  (() => {
    let e = [];
    const o = ["C", "D", "H", "S"],
      t = ["A", "J", "Q", "K"];
    let a = [];
    const n = document.querySelector("#btnPedir"),
      r = document.querySelector("#btnDetener"),
      s = document.querySelector("#btnNuevo"),
      l = document.querySelectorAll("small"),
      c = document.querySelector("#jugador-cartas"),
      d = document.querySelector("#computadora-cartas");
    console.log(n),
      console.log(r),
      console.log(l),
      console.log(s),
      console.log(c),
      console.log(d);
    const u = (n = 2) => {
        e = (() => {
          e = [];
          for (let t = 2; t <= 10; t++) for (let a of o) e.push(t + a);
          for (let a of o) for (let o of t) e.push(o + a);
          return _.shuffle(e);
        })();
        for (let e = 0; e < n; e++) a.push(0);
      },
      i = () => {
        if (0 === e.length) throw "No hay cartas en el deck";
        return e.pop();
      },
      p = (e, o) => (
        (a[o] =
          a[o] +
          ((e) => {
            const o = e.substring(0, e.length - 1);
            return isNaN(o) ? ("A" === o ? 11 : 10) : 1 * o;
          })(e)),
        (l[o].innerHTML = a[o]),
        a[o]
      ),
      m = (e) => {
        do {
          const o = i();
          p(o, a.length - 1);
          const t = document.createElement("img");
          if (
            ((t.src = `assets/cartas/${o}.png`),
            t.classList.add("carta"),
            d.append(t),
            e > 21)
          )
            break;
        } while (puntosComputadora < e && e <= 21);
        setTimeout(() => {
          puntosComputadora === e
            ? alert("Nadie Gana :(")
            : e > 21
            ? alert("La computadora gana")
            : puntosComputadora > 21
            ? alert("Jugador Gana")
            : alert("Computadora Gana");
        }, 10);
      };
    n.addEventListener("click", function () {
      const e = i(),
        o = p(e, 0),
        t = document.createElement("img");
      (t.src = `assets/cartas/${e}.png`),
        t.classList.add("carta"),
        c.append(t),
        o > 21
          ? (console.warn("Lo siento mucho, perdiste"),
            alert("Lo siento mucho, perdiste"),
            (n.disabled = !0),
            (r.disabled = !0),
            m(o))
          : 21 === o &&
            (console.warn("Ganaste <3, Victoria"),
            (n.disabled = !0),
            (r.disabled = !0),
            m(o)),
        console.log(o);
    }),
      r.addEventListener("click", () => {
        (n.disabled = !0), (r.disabled = !0), m(puntosJugador);
      }),
      s.addEventListener("click", () => {
        console.clear(),
          u(),
          (l[0].innerHTML = 0),
          (l[1].innerHTML = 0),
          (d.innerHTML = ""),
          (c.innerHTML = ""),
          (n.disabled = !1),
          (r.disabled = !1);
      });
  })();
