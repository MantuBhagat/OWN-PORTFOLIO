import React from "react";
import { motion } from "framer-motion";
import profile from "../assets/ProfilePic.jpg";
import { FaGithub, FaInstagram, FaShare } from "react-icons/fa";

const FeatureProjects = () => {
  const FeatureProjects = [
    {
      title: "Project One",
      description: "A brief description of Project One.",
      imageUrl: "https://via.placeholder.com/300",
      projectLink: "#",
    },
    {
      title: "Project Two",
      description: "A brief description of Project Two.",
      imageUrl: "https://via.placeholder.com/300",
      projectLink: "#",
    },
    {
      title: "Project Three",
      description: "A brief description of Project Three.",
      imageUrl:
        "https://plus.unsplash.com/premium_photo-1661510884617-232a2ba30dc2?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8d2Vic2l0ZSUyMGRlc2lnbnxlbnwwfHwwfHx8MA%3D%3D",
      projectLink: "#",
    },
    {
      title: "Project Four",
      description: "A brief description of Project Four.",
      imageUrl:
        "data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAkGBxASEhUSExMVFRUXGBYXFxYYFRcXFRgTFhcaFhgVGRUYHSggGBolHRYVIzEhJSkrLi4uFyEzODMsNygtLisBCgoKDg0OGxAQGy0lICIvLS0tLy82LS8tLSstLi0tLS0tLS0vLS0tLS0tLS0tLS0tNisrLS0tLy0tLS0tLS0tLf/AABEIAMIBAwMBIgACEQEDEQH/xAAcAAEAAQUBAQAAAAAAAAAAAAAABQECAwQGBwj/xABIEAABAwEFAwcJBQYFAwUAAAABAAIRAwQFEiExQVFxBhMiMmGBkRQzUnKTobHB0QdCU9LwFSNDkrLCYoLT4fEWY3MkNESUov/EABoBAQADAQEBAAAAAAAAAAAAAAABAwQCBQb/xAAyEQACAQIEBAQEBQUAAAAAAAAAAQIDEQQSITIFMVFhFCJBoROR4fAGQnHB0RUWQ1Ni/9oADAMBAAIRAxEAPwD0tURdFRotaAAFvqVMhihTznOykrpsITCFV4jsWeH7nMykrpsITCE8T2J+B3OZlJXTYQrK1FrgQQniOxDodznUQBFpM4REQBERAEREAVJW9dLQXmdg+YUxAVE62V2sXQpZle5zMoumgJhC58R2OvD9zmZRdNhCYQniOw8P3OZRdNhCjb5aIaYzldRr5naxzKjlV7kYiIrykIiIAiIgCIiAIiIChXQ1scDBEyJnd9dFzxXSg5LNiPQ0Yf1LkVocFWFlNJVFREBVatk53pY9Jy00z3HhqstoqhjS45gCdnzVtltAqNxgGDMTrG+NnA5oGQAKKgVV6aPOCIiAIiIAiIgN+5+ueHzClGzJnTKPmoq5+ufV+YWf9ovmOYq6kSA2NXZySMuiP5gsNbebKOwkFVaBvB8TzFTVojozhcJJ12aEK0Xk8/8Ax6wO4hoyidQTwhVFpIqhVUQGk8V8GR6c7m5N78s4B71hvWcDJ128YzUmo6+eq3j8lZS3orq7GRSIi3mIIiIAiIgCIiAIiIChU5abbTpxjcGzMTuETw1HioMrdvy9TRNNoaHFwcQIJMNiSAOKy4p2SNWGV20bNO+LOdKrZyyznMkaROwq6je1BxAbVaSYAE7ToFBUeUj3zDaZLSQ4QcQOkETltWT9v1fRZ4H6rA68Foz0FhKjV1b5nTQd6Qd65d3KSr6LPf8AVSN0Xs+q1xIEgwImMxtUxrRk7IiphqlOOaSJdzZ1+CoGwuZ5YcobRZW0TSptealTm3FwdDZmD0dNDqstlvuu5tBzhTAqvwHOPvEdGXSSRpkTkct1mZXsU5W1csCqqBVXqI8wIiIAiIgCIiA3ro6x9X5hbr2MAMvdAz65yjXu7FpXP1j6vzCxXq8hjg0w45CACYnOMWWk6rDX3s2UdpsWS3WaqYp18RABOF50nU+K3bO1oOTnO4uJXEXBYKlB5eahcIwxkGkZHERmQ7LfHFdbYKgcQR2qiLbWpfJJPQkHVANTCjL25SWKylotFopUi+cONwbiiJiddR4ratgzHBfNd58t7RaLeKlZwZT5wM5t7Q9tKkXBrtkyMMkzqDsUt9CElfU+lbHeNGq3HTqNc2XDEDIlri1w7iCO5a98not4/JYLHY2UqbaTB0WjdEkklzjG0kkntKzXr1GfrYrKO5FdbayMREXoGEIiIAiIgCIiAIiIChWpyvqhtrsROk1QeDmtHxIW2Vzn2tU6pdZCxlUgc5LqdN9TDkwiQwTsWbEehooepy2OoKnO5guJcHcTiiZjbp2FTzbxpkjDhDnDEJEGSTNNztpnISNy49lleZBFrIAcQPJarTIBIAJJAMx4q27qNoxYjZrQ0DDhxUzMnOSGtyIiM9q8+cVLR8z06VRwu48jvefdqGB/YZzO6G5g7tQug5OWuk1j3gEAObiBBEOIiJdr3Lzdl42oEObRrgycjSqZDPs0+S6a7bdXdYbRV5mo1/O0+iWOxHNoc4CJIz1SnTyOzFWsqkLps6+96rXkU3EtGHGTlhgHKRtzXFW19Oja7NQbaH4nVqLuaDegQawBk5wZbOzbrKyXna3Pl4NYOw4ZFnqExroAcpXNPpWh15WE4Kz2isxznGz1GhvTbPSIgNynMqxLW5Q3aFj0wKqoFVeojywiokqQVRUlJQFUREBvXP1j6vzCj74qRUaOPvn6BSNz9c8PmFD38SKgJBicjGU56+Kw195so7Syu7ongVK8nqkgZEdh2S2VzF63uyjTLnNqOPospve48GgT36LqrjpFobIIJzzEQMOXfHxVJcbF+VxTp1Kh+5TqP/laXfJfHJJI7Y+S+weUtidXoVqDThdVo1aQcQSGmowsDiBulfKds5O2unUfT5is7A5zcTaNXC7CS3E04dDEhSQfUHJm189Y7NV1x0aTs9ZLBPvlSF69Rn62KB5B03tu2xtc1zXChTBBBBBAiCDoVPXr1GfrYrKW9HFXYyMRFRbzCVRUlEBVFREBVFSVVAEREBQqdtNspU8IqODZGU6ZEDXi5o71BFT1ttDadN1R2jWknuExmsuJ9DTh/UwftOzQTzjY49gPfqFT9qWbLpggktBAJEgAnOO0eKw3Le1K0DJmE4WuAljgWO2tc0mRlGzTdBUqGjcFlTvyNLTTszRF6WaY5xu/xnTectFnoWmm8EsIdGvYYBznsIWXmm+iPAKlVzGNc4w1oBLjoIGpJUkFrnAax+u5XADcFEXLyjstqIbSc+XUxVYHNc0vokgc42dRm3tGJsjMKZwqSGmuZz9lp4nNadpU62zs9EeAULYPOM4qae9+MANlsZmdDwV9du6KaCVmV5hnojwCcwz0W+AWVFRdl1kYuYZ6LfAJzDPRHgFlRLsWRj5hnojwC1LyszcBcAARuW3Xc4NJaJMGB2xktOs95ouLwAewEDXLI5hdQbzI5mllZr3P1zw+YSz2moX4ebrgFzgSSMIAc8TmNIYDl6YS5+ufV+YW1UthbJOEATJOgA26rqvvZFHaZRRkZPeO/wCoWSjTw/eLuMfILl7q5VPqVnMeGNYTFIwQ49KAHy4wSNnwXR0a7i4AwqU7l0oOPMw2+u5tRoDKrhEyzq9dogjg4ng0q+ysL2NcTUYSAcLiMTew5RKzWiqQRELzvlDyzvVtrq2ey0KDW0g0TXa8uql2eNhbUaAyD2nou4I2lqyIxcnZHojKBBnG89hIj3Bad9dVvH5KB5B8qLRa6DzaG022inULKjGNcGhpzpuhziSHDFnMGDuU9e5lrePyVlJ+ZFdVWizWsuTZAEkkSQDkAN/FbAcez+Vv0WGzdT/Mfg1ZAV1UbzM5pryovnsH8rfosNottOn1302esWNy35qI5Y30bLZK1Vkc41kMnQVH9Fk/5iDHYvB7bedao51Rz3OLjJcSZPErjU7sfSHOzmMJHYGkeMJzh7P5W/RfONy8o7TZaoq0nnI5tzLXt2tcBqF7/cl5MtNCnXZIa9swdQdC09oII7kuQb/OHs/lb9FrWnUGIJGcZDIkT7lsLBavu8D/AFOV1G+Yqq7TCiKq1mYtKpy1tDwxtMGGvBxZagRkqlYuWv8AC4O/tWLG7T0+FwU6yi/vRnkzLZzQNnONrg7DIJmC4Ztg5yYOW0BegUuUFrwj96TkM8DM+3RedcqLQ5tdwawmo4AU3DVskguG9xAc0TpinWFJcnOUeMihWBbU6oLhhJPouECHdyxUqqpp6J36nt18EsQ4rM4pdLa/NPoe02S0udZ21D1jTDjltwzooa21n1ab6TnnC9pa7TQiDsUlYmg2JoOhogbjmzeNFytOyWqhApvbXoiOhULjWY372GrJ5zsDo3SupN2RgpQV5aepo3Hdtez1bKalbEaNCpQy6riXjC7M64W9uuq7y67Q92LEZiFzVQMg1MQIIOY0iP8AhT1wvkE9g+effr3rmle9ia0VkehgsHnGcVkvrlNRsr8D2vJwh3RAiCSNpG4rHYPOM4rnuXQPlDSNcDfi5a8XUUGmzLwujGtUyy5G9W+0ayt1p1vBv5lZS+0myO0ZV8GfmXB2wunZt+63dG7tUU20vYQMo9UfGF62DweHrwu73/U9+XCqLi7Xv+p6y3l9ZT9yr4N/Msn/AFzZ/Qq+DfzLy+jWnNbjHLW+FUO/zPmOIwq0U8h6zc1+U7SHFgcMJAMgbeB7FtW9003d3xC5L7PBlW9Znwcurtnm393yXiYinGnXcI8kzNhak6mHUp89TUufrn1fmFpcqQ7yWvgMOwGO4gn3St25+ufV+YWR4BJBzBJB3Qciqq+5mig7RTPKbRVdhDgc5adc9Qctm/wXrtn6w7/gvn25LTbfLaAc57mC3mzluFuZouY54MDEQGmTOwZr3+yul47/AILPFWNVWop2sZ7VqOC5flfZjVawUxNVrsjOTWnrSNuwx2LorzfA7YgcVz7nVc8Iac4EuIy8EmrqzFLTzGS5aQoMDIbJMvdEOJO0n7xAgZ7Ape9eoz9bFDUa5JIMAwCRMxJKmLw83T7vgrMPuRXil5W+pjsvU/zH4NV5WqLS1jRJ1c73BqrXq4qZI2tPwVlReZlEH5UeffaXaHvsb8GvO0HHKei5xaMuwup/yry2ldzCx1SrUDhiIbJLcUZEtjtXovLe1uaypSYJfU6IG0BgxF3gBn2qG5F1qVWzCk4N6BM4tN8lZa02uRroQUnqcneNz02NaWuwlwkSZEH3qe+zW/b0bWZQs4dWo4hzlN2dOm0kYniofNkTMTnuKnL5rWd5mKRFFpPReDLR0uqBlnxW59jd/F1N9jqZETVpDToPMuaN8EyOwnclCblzGIgo2senjNWWodXh/cVVqpavu+r/AHFbqW4wVNphREWozlCsXLX+Fwd/aspUredSmMIeKRmYFTsjMZHf71kxaukjfw+t8KpntyPD+VFIOtdBpJGIMbIMO84cwRoYOqkrs5MUqNXnecfUInDjw5E5YpAzMfFeqi7aFSKgoWZ8dR2FpOR2HCdq3aV3Uo6VKnPY0R8Fg+Ez3P6pC93AwWH/ANm3/wAI/pUNVtAYwuJyAXUViGMceiA1p16oAG2Nij6bqdTogUHGJwjMkSWnItyzy2qxxuefTxCi3dc2edW6+aLKjQSwh5ALWlodjPVJZIBEZERs7ZXcckwwB7WgNzlzQdHEkHLYMsgpAXXT6poUMJmegNDrlhz0Hgt2hZmMEMY1o3NaAPcojBpnVbExnCyRC2DzjOKhOWbTz4I9AfFym7B5xnFL8uR9Z+NrgOiBtnbu4qvjEKk6aVNXehRwqpGnUzSemp53aBUG0hQtu5wDVwGzUaL0StyOrO/iN8HLSr/Z/Xd/FZ/K76rbwrEzpW+IrH0kMfh09y9zgbPa3EQ5xPYd4UzZbJVcAW03EGIIBIMmBHfAUwPsytEyK9P+R31UhZuQ9sYAG2kADdjG2codlmV9LU4hh2rxkvc83iM8PVXklc2/s8zbW4s/pcuqtDA2k5o0AAGZOQganMqL5MXFUsoqYnB5cWnIEdUHee1S1sB5t0iNPiF4GJnGeIcovS6PDjDJTympc/XPq/MK6pTbJ6Txmf4blbc/XPq/MLLRu0NeHc9UMOJwl+WZe7CRtAx+DRuVNfeKO05m7Ps/FO1m1c+S017RaW0+biKloYGHOdgnZtXXULJhcDimOxUqXlQYYfWpg7nPYCO6VtBw3qotI69bOHkdJzciJDS7M7ctuS023YGiMb8s+oc9kqStlkxva7nXsgRha4AHpNdmCD6MZbHFYrHb7Mxop+UU3Fggk1Wl0jXFnrkVDSO1OSVkRlkuKmHvcHvL3DVzCAB2aBSV7CGNG4x7lu0rQxwDmva4HQhwIOzIhaV9dVvH5KyikpKxXWk5R1ON5XVKg8lFOS91Z4AGZPQZ7lv3o97Gtc0YiBhLQ8tGI7TlmJ7Fu16TYbVOrTUaOLxTBPgCO9Q1vc6Zbmc+jsc3a39fVTNednFPajgLytn79z3ODqpAyiA2HZsAPWGQk7ZK5CzV3WW0ZAlhPV0BbOXgu6viwsry4dIiHA7Sx0wexwgt35BQdpuPnaOQcSHgZRiALXEgZf4QqJR9C+M2tSNvK+BaiKFBjmmo4NcXGQBMZZ6b+wLsbJdIp121rJ0m2RoJLSDjbTDG1GAjrOwir2SI2qy5uQtiaxrqoe5ztDiIw5AxhGTtdu5bhNW7nh46VCIxNhksJEsMyWEZbwd6RjkWiE553dnpjcwCMwRIOwg5gqy0GcPD+5y4S4uVDaRaxjy6nhYyKhAaxwETIBIbpp2rsrLa+dp06kASH6SRlUeJBIBgxOY2rTQleZmrxSjozIiItpkKFTtpZSOHG1pjSRMTkT2bM1BFdDzbXAHXLfs7tVmxHoX0b2di5lJoAAAAGkDRDUExOZV6irffNnpVMLxVxADNtnr1BB/xMYW+9ZTUSj2AggiQciNhB2LDQoU2GGNa0xsAGW7Lu9yjP+qrL/3/AP6lq/0llsN+WarUDGCrjdPWs9dgyE5vfTDRkNpQEqqYplVVroAJ02lCGQVg84zipW1U6Y6TpE5au7ToDrqoqwecbxUzUrwYwuPaGyPHvV9fmimhyZrxQO3UnRz9RmdCs9K0MyaHdg1+JVG2mSBgeJ2lsAcdy2FQXiCkFE70Aha14+bd+toWz3rXvHzbv1tC6juRzLazQufrn1fmFICiwkqPufrn1fmFLNYAu6+84o7SDtXJWyPrc/UaXnXC6HU5EQ7CRqInipazBjuk0zCyWio1rHOdOEAkwCTAEnIZngFDUeUVjaIaagH/AILR/pqpJJFjcm+xL16LTmTELl7q+z276AeaYeTUc57nFwLsThBIdEt7lKO5TWQ5TU9hX/01I3fa6dVmOnOHMZtcw5f4XgFQ0mdKTTujXsV10aFNtNshrZ3fecXEmBqST4ql8CGtHb8lIuaDqo6+eq3j8lbS3Irq7WRdoE0w3e53wauYtjyei7IjbtB2H9b109U9FvrOHiGKAvCkHAE5HSdh7Cup7mcw2ogLGAK8E5uxSNzjDjG8EgOHrnesltsXNh7gIEtftyLSWnuipPcsF40XU3tq7GmSdobBkHeM5n6qXvOsDZ3v3ATwcQ0+5xVdiwy1nzRY4bveNFFcrbUKdmpk5hzwwy0OEFrjmN0tC26D/wBwB2/NaHLelNgefQ5txzAjp4SZOmTkfIjkcld9ZgxHZkZLdHTMYZ0Xq/Jio11js7m6Fr49tUXhNlvMsc2Gte0atjr57T+tF7byFqYruspgNltTICAP39XRThlaZXW2E6iIvQMgV7KzmiA4gcVYiNJ8yU7GXymp6bvFPKanpu8ViRRlXQZn1MvlNT03eKeU1PTd4rEiZY9Ccz6mXymp6R8Va+s85FxPerETKuhGZ9TPYfON4qbqYo6MA9uihLD5xvFTFRj5yfA3YQc43rJiNxpobWWnnJ1ZHeg53ez3rJQDgM3Yu2AO7JZFQXllIu+9Hd/v3q/JY6jHGIdG/IGfFVpMIGZxHfAHwQF+S17x8279bQtha14+bd+toXUdyOZbWQjHkGQYKyeV1PTd4rEi9CyfNGFNoy+VVPTd4p5VU9N3isSKMsehOZ9TL5VU9N3inlVT0z4rEiZI9BmfUy+VVPTPirKlRzusSeKtRMqRF31L30XvY0NaT0j3ZNUfelgtJltOiTP3pG3WBKn7vMUnkENMnpHQdEZoatYfxaUZnzbj0QY1xZ6jNYqsrSZspq8UcZaeTNofTdScxxDmkAwOiSNRn7lrWO47WGOZUoVCCCzohpmcsXWGW1d1VtFVuI89SAGM50nGA0yZIfsGqz83adlSnoNabtd+Tx2qvNfkWWscDdtxWsNwmg8QduHTuK3L55PWitZK9EUzifSe1unWLSW7fShd1ZW1AP3jmuOwtaW5QNZJzmdyzqbkWPmAcgb4y/8AQVY2w6nn/wDvJeu8hrJVo3fZqdZjmVGtqhzXCHA8/VyjhC72o10iDltUVe/XHqj4lWUN5VW2GmiItxkCIiAIiIAiIgCIiAz2HzjeKm6tFrhDhI+ahLD5xvFSNosDXuLucqNJEdGoQB3abljxG41UNrNqnSDdBCvUey7AI/e1spmahMy0jMd85bgqMulg/i1tn8Z+yO3sCoLyQc0HIiQqtEZAQsdmohrQ0Oc6JzccRzM6q+o2RHwy96AuWtePm3fraFc2ztH3nHi4n5rDa6YbRLQSQBqSXHXaTmSuo7kcy2shgiBF6JgCIiAIiIAiIgJS7KobSe52QaSTkTkGgnIarYslvo1SQxwcWwSM8gdNeC17sfhpvdBMEmAJJhoyA2lZqFvDnBvN1RM5upkNy3nuXn1d7N1PajcREXB2FjqV2tIBOZ0yOxZFZVqYdhPASgLBaWS0T15w5HZrnGXeou9+v3D5qUFonD0XdKc4yEelOijL36/cPmrqG8pr7TSREW0yBERAEREAREQBERAZ7D5xvFb9psNme4ue1pcRBM5wNkg/qFEg68HfArkbLZQ5uIuA6Qbn2iZ1ULDKq227WMmJ4k8JaMYZr39bcrHoDbtsoiGtyn72stLSDn0hDjqguux7KdP/AIyXA+R/4xGDFOg34ew/ULDaqOBxbMxGY25Su48OjJ2U/Yxy/EM4q7pe/wBD1Cz80xoY3CGjQA6K59RhEEgjiF5Qi7/pX/Xt9Sv+5n/r9/oepsp0RphHhwWO0tYKJazCGgAANiAJ3BeasYDtA4mPkpLk4f3jtxpn+pqrnw9QWbNy7Gihx51qkabhbNpz+h0CIig9MIiIAiIgCIiAlbpcAwyY6XyC231xBhzZgxJgTsk7lxHKU9Cn6z/gxR77uAJGNuRI03AGde3ujuULBxmszla/YwV+LzoTdONO9ra3tz1O+Nqq7qPtXfk4IbTV3UfaH8i88Ni6M4gOiTh2gjZ7onetRWR4Ypcp+xml+Ipx50vf6HqTbS7/ALY1npzwjJXNtBnPBHY/PwheXMYDu26mBkrzSG9vj/t+pR8MS/N7fUL8Ryf+P3+h6nz7PSHiFE3semOA+a4F9IDa08DK6i6z+4peqf63LmWD+DaSdzVheLPFydNwtZX53/bubSIig3BERAEREAREQBERAVaJy3gjvIK4cBdurX0mEyWMJ2ksYSeJIzV9Gt8K+l7nmcQ4e8VltK1r+5xULXdb6AyNakDu5xgPhK7vmKf4dP2bPypzFP8ACp+zZ9Fc8Y/RHnx4C/zS/b+Tgv2jQ/Gpe0Z9Vlo2mm+cD2OjXC4OjjByXccxT/Dp+zZ9E5in+HT9mz6KFjJeqOpcCVtJffyONDlLcm2k1HnYKZBOyS5sD3HwU55PT/Dp+zZ+VXtaAIADRrDWhonfAC5q4nPFxtzLMLweVGrGo53sVREWU90IiIAiIgCIiAh+U3Up+s/4MXPQu4cARBAcNYc0OE74IWPyal+FS9lT/KtNHE/DjlseLjeEyxFZ1FJK9jiatVrBLnNaN7iAJ4lYf2lQ/Gpe0Z9V3nk9P8On7Nn5VXyen+HT9nT/ACrt4yXojPHgWnml9/I4MXlQ/Gpe1Z9VstqSJBkHMEHIjiuz5in+HT9mz8qp5PT/AA6fs2flRYx+qEuBP8s/v2OOxHeusuvzFL1T/W5ZfJ6f4dL2VP8AKspP0GUADcANFXWr/ESVrGzh/DZYWbm5Xure6/gIiLOesEREAREQBERAEREAREQBERAEREAREQBERAEREAREQBERAEREAREQBERAEREAREQH/9k=",
      projectLink: "#",
    },
    {
      title: "Project Five",
      description: "A brief description of Project Five.",
      imageUrl:
        "https://www.behance.net/gallery/237249011/Modern-Gradient-CV-Resume-Template?tracking_source=search_projects|modern+portfolio+template&l=3",
      projectLink: "#",
    },
  ];

  return (
    <motion.div
      className="w-full h-auto flex flex-col md:flex-row items-center justify-between gap-10 md:gap-20 p-6 md:p-12"
      initial={{ opacity: 0, y: -50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <div className="w-full">
        <h1 className="text-4xl font-bold text-gray-800 mb-8 text-center md:text-left">
          <span className="text-4xl text-orange-500">Featured</span> Projects
        </h1>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {FeatureProjects.map((project, index) => (
            <motion.a
              key={index}
              href={project.projectLink}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-white rounded-lg shadow-lg overflow-hidden transform hover:scale-105 transition-transform duration-300"
              whileHover={{ scale: 1.05 }}
            >
              <img
                src={project.imageUrl}
                alt={project.title}
                className="w-full h-48 object-cover"
              />
              <div className="p-4">
                <h2 className="text-2xl font-semibold text-gray-800">
                  {project.title}
                </h2>
                <p className="text-gray-600 mt-2">{project.description}</p>
              </div>
            </motion.a>
          ))}
        </div>
      </div>
    </motion.div>
  );
};

export default FeatureProjects;
