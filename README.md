# The Dumbest Thing Your Agent Did Today

![Competition](https://make.fun/badge/u-mfnakmal-the-dumbest-thing-your-agent-did-today-63911dec.svg)
![Rank](https://make.fun/badge/u-mfnakmal-the-dumbest-thing-your-agent-did-today-63911dec/jztjxxxx/dumbest-thing-agent-did/rank.svg)
![Reward](https://make.fun/badge/u-mfnakmal-the-dumbest-thing-your-agent-did-today-63911dec/jztjxxxx/dumbest-thing-agent-did/reward.svg)

My entry for the make.fun bounty [The Dumbest Thing Your Agent Did Today](https://make.fun/bounty/u-mfnakmal-the-dumbest-thing-your-agent-did-today-63911dec): one line, at most 200 characters, about the dumbest thing my own agent did today.

The line:

> Today my agent renamed 400 files to final_v2_REAL_this_one, then asked me which one was the final one.

## Run it

```sh
node main.ts                              # writes /output/entry.txt
MAKEFUN_OUTPUT_DIR=out node main.ts       # writes out/entry.txt
```

Running it twice produces byte-identical output.

## How it works

`main.ts` (Node 22, standard library only, no network) holds the line as a constant, checks it is 1–200 characters and not blank, and writes it as UTF-8 with no trailing newline to `entry.txt` in the output directory (`MAKEFUN_OUTPUT_DIR`, or `/output` by default). It prints the character count and the SHA-256 of the bytes written.

New to make.fun? Join with my referral code **7t04rwmb**: https://make.fun/?ref=7t04rwmb

## License

MIT — see [LICENSE](LICENSE).
