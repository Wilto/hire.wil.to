---
templateClass: "blog"
title: "The <s>year</s> couple months of Linux on the desktop."
lede: "After spending my entire career on various MacsBook Pro, I’m now using a <a href='https://frame.work'>Framework 16</a> with Ubuntu."
tags: "posts"
permalink: "/switching-to-a-framework-and-ubuntu/index.html"
---

Okay, “man has, uses computer” doesn’t make for the most thrilling headline of all time; I get that.

However, I also get the sense that I’m not the first and only dork to start entertaining the notion of _not_ splashing out thousands of dollars on a machine that feels increasingly disposable, just to use a platform that feels increasingly overbearing. So if you should ever find yourself in the same position I was about six months ago, with a tube of CA glue in one hand and tweezers semi-permanently affixed to the other, attempting to carefully glue a command key’s butterfly hinge back onto a machine with about an hour of battery life and a slowly expanding crack in the screen—really living the black-and-white, “there’s _got_ to be a _better way_” part of the infomercial—maybe there’s something of value in here for you.

## My whole deal

First, I want to establish a few things that made this viable in the first place—if none of this resonates, listen, I’m not trying to _sell_ anything here. A new MBP would have served me just fine, as the last one did, and the one before that did. They _work_; that’s, like, their main thing.

My main thing, arguably, is fixing stuff. My secondary thing, almost inarguably, is hubris. Regardless of the “it” or the nature of the “broken,” I am possessed of an unshakable, soul-deep confidence that I can fix it—that if someone was able to put it together, I am able to take it apart, and if it is made up of component parts, I am able to replace or repair those parts. You will not convince me otherwise. That I have tried and failed to fix many things in the past will not convince me otherwise. That there are things I don’t especially want to fix will not convince me otherwise. The understanding that there are, in fact, a great many things that I am _unable_ to fix will not convince me otherwise. I can fix anything. I did not choose to be this way; it is in my blood.

As you might imagine, I bristle pretty hard at popping a hood to find a plastic shield bolted down with special dealership-owned security bits, as it is clearly intended as an insult to me personally. When I encounter something that wasn’t _meant_ to be fixed, that I am not _allowed_ to fix, my incredible hubris is obviously unchanged, but the way I see that object is. It is _disposable_. Just because I lived and died by the MacBook Pro, professionally speaking, didn’t mean I harbored any _respect_ for it—it doesn’t get a name beyond “MacBook Pro (4).”

Of course, none of this means that I _want_ to spend my one wild and precious life constantly changing spark plugs—likewise, I didn’t want to pick up a part-time job in IT just to support my current full-time job making websites. If I was ditching Apple-made hardware, my options were either Windows or Linux. I hadn’t used the former in earnest since the 1900s and understood it to also be increasingly what-if-your-computer-was-an-iPad-level unserious, so I really only had the latter as an option, giving me visions of driver conflicts, “compiling” things, and needing to know what a “kernel” is (I know what a kernel is; _shh_). 

So in order to avoid burning my website-making time cursing in the direction of files with `.conf` extensions, I decided to give myself a probationary period. I bought a crummy old refurbished Dell to chuck Ubuntu on there and test-drive it as my work machine for a month. The first time I found myself stuck fussing with my Sound Blaster 16 instead of making websites, the ripcord gets pulled; buy-it-now another wildly expensive slab of milled aluminum, plug it in, turn it on, back to work. That would, I cannot stress enough, have been fine! Not _better_, but fine.

## The Software

I already spent a lot of quality time with the command line, so no big change there. I’ve also put together all manner of one-off Raspberry Pi contraptions—for example, the [Super Wiltondo Entertainment System](https://front-end.social/@Wilto/109501678351031126), he bragged—so I can `sudo` with the okay-est of them. I mostly went with Ubuntu because that was the name that kept showing up on the Framework website, and I wasn’t gonna go trying to form opinions about things I hadn’t tried out for myself (presumably there is some other distribution that I would like better, but this thing is doing what I need it to; _shh_).

I had two primary concerns, software-wise: Sketch and VoiceOver. If I’m doing capital-D Design, I’m doing it in the browser anyway—“work with the medium” and all—but I still used Sketch for things like [the zine](https://multipa.ge) and I wasn’t enthusiastic about learning a new design tool from scratch. Losing quick-and-easy access to VoiceOver was the big one. I already do most of my in-depth testing on a raggedy old PC set up for NVDA and JAWS anyway—likewise, I figured I could hot glue my old MBP back together enough for VO use, or pick up a refurbished Mac Mini or something. Still, not ideal to do all my typing on one machine and all my testing elsewhere.

With the count at one strike and some disdain in my heart, I fired up this bargain-basement Dell and installed Ubuntu.

### The good

Well, first off, it worked: on both my prototype Dell and the Framework, Ubuntu installed without a hitch. I had to adjust some resolution and scaling stuff on the Framework right away, but more on that later.

There are some little OS features that I [really appreciate](https://front-end.social/@Wilto/113398266412744319), but given the amount of time I spend in the browser, I don’t notice a ton of day-to-day difference unless I go looking. Surprising absolutely nobody, myself included, the UI feels like a thin veneer over the real action happening at the command line level; that’s how I was using MacOS anyway, but that veneer was constantly growing thicker through more and more layers of “are you _sure_ you want to install something from the _icky internet_ when our app store is but a click away?” I like `apt` just fine. I'd always rather catch a bit of boom mic in the shot than watch something filmed in front of a green screen.

I had already switched to WezTerm back when [iTerm2 started smearing “AI” all over itself](https://iterm2.com/downloads/stable/iTerm2-3_5_0.changelog), so I grabbed that, set it up the way I had it on my Mac, pulled over my dotfiles, and I was up and running. WezTerm probably wasn’t necessary (_shh_), but it was nice to have something familiar to brace myself against. I installed [Timeshift](https://github.com/linuxmint/timeshift) so I could roll the whole system back when I started breaking things.

[Lunacy](https://icons8.com/lunacy) has turned out to be a [pretty decent replacement for Sketch](https://front-end.social/@Wilto/113154111000782638) (also besmeared with “AI,” but I figure that’s just how it’s gonna go until that particular bubble bursts). I started using [Scribus](https://wiki.scribus.net) for zine layouts—a little arcane, but workable.

I tinkered with some virtual machine stuff so I could spin up a Windows VM for quick NVDA/JAWS testing, and eventually landed on [Quickemu](https://quickemu-project.github.io/)—which presented me with a big button that installs a _MacOS_ VM, which I had no idea was doable. The Mac VM hasn't turned out to be the _least_ flaky thing I've ever used, but it works enough to get into Safari and switch on VoiceOver for a quick spot-check. The Windows VM is solid.

### The bad

I do miss having VoiceOver a keyboard shortcut away, but what can you do; not like it was my primary testing environment anyway.

My antique Bluetooth earbuds (“Jabra Elite t65,” in case you’re landing here from some search engine) straight-up didn’t work—something about the built-in microphone and audio profiles baked into the things meant that it initially paired as the “high-fidelity playback (A2DP)” profile, but when reconnecting it always registered as a low-quality _headset_ (HSP/HFP, whatever that means), without the option to switch back to the high-quality. While “audio issues” are my Linux-nightmare cliché of choice, I figured, grain of salt; these things were from like 2014. I got new headphones. They work fine.

I hadn’t considered that I’d be losing the Messages app, which is inconvenient for sure, but not like my phone is across the street during the work day anyway. I tried setting up [BlueBubbles](https://bluebubbles.app/) since I left my old MBP networked to grab files as-needed, but it was too unreliable to be of any real use. Ah well.

After I’d put the Dell through its paces and determined that I was in decent shape for day-to-day use, I committed to the Framework.

Out of the box, so to speak, the scale was way, way off—everything was almost unreadably small. Changing the overall scaling in the settings threw everything off; pointer location, size of windows, etc. In order to make it usable, the trick was to scale all the UI text in the accessibility settings. Not intuitive, but it did work: everything reliably shows up at the size I’d expect. It does mean—at least, I think this is why—that two-finger scrolling moves really fast. I assume I could fix it somehow, but I’m used to it at this point. 

I’d be remiss if I didn’t mention here that font scaling overall is a little iffy compared to a Mac, perhaps unsurprisingly; not showstopping, but when you choose fonts for a living you notice such things. I also feel like I’ve seen a few more subpixel rounding weirdnesses in Firefox, but maybe that’s me.

I used to _manually type_ things like curly quotes and accented characters on my Mac, like an absolute lunatic—obviously all of that is right out. Ubuntu uses a [compose key](https://askubuntu.com/questions/358/how-can-i-type-accented-characters-like-%C3%AB), which I’m still getting used to.

Now, here’s the big one: I asked for no more guardrails, and I got no more guardrails. MacOS is bumper bowling all the way down: even after I click through four layers of warnings and “are you sure”-toggles to install something of dubious origin, it’s a pretty safe bet nothing will _break_-break. Here, I wanted to set up the cheap little “Neflaca” printer I grabbed for the zine shipping labels, which I hadn’t bothered to do on the test machine. Their website offered a script to install drivers for Linux. I grabbed it while half paying attention, ran it, and was asked to restart. Some of you are flinching, but more of you probably aren’t any more than I was; like, what, worst case, a _printer_ doesn’t work? A printer not working is quite possibly the least surprising situation in all of computer science. 

My scaling broke. I could _see_ the whole thing, but I couldn’t move my cursor outside of a little rectangle at the top left; what my window manager thought was the actual screen, I guess? This was, as Linux dorks would absolutely guess and non-Linux dorks could not possibly guess, related to “Wayland.” I don’t one hundred percent know what Wayland is (_shh_), and I won’t claim to—I know it was a change to the default windowing system as of a few years ago. I know applications not built for Wayland show up grainy and blurry. I know it is Complicated. My hunch is that an old, poorly made non-Wayland thing got in there and tried to de-Wayland the whole place, resulting in disaster.

I rolled the system back to the day before with Timeshift and everything worked fine again. I plugged the printer into my half-busted MBP, shared it across the network, and print that way. Lesson learned.

## The Hardware

I went with a relatively spartan “DIY” Framework 16. No graphics card module needed for my day-to-day purposes, and no light-up spacers or programmable LED panels—that stuff is clever and all, but this thing is for work. Picked up some memory from a third-party to save a couple bucks, which was already a nice little difference here in the zeroth step of the switching process.

In terms of ergonomic preferences, I went into this playing on the highest possible difficulty level: owing to years of MBTA commutes and working out of Diesel Cafe for an occasional change of scenery, I’ve always used my computers straight-up-no-chaser: built-in trackpad and keyboard, no external monitor. There is _certainly_ a case to be made for switching to a more stationary setup these days, but still, I wanted to feel comfortable using whatever machine I ended up with in the same way.

### The good

I put it together and it worked, for one thing. It arrived as individually-boxed parts, mostly assembled: the chassis with motherboard and screen already attached, the keyboard I chose, a trackpad, a number pad, and the spacers that fill out the empty space around the trackpad. I wouldn’t say I _built_ it any more than I’d proudly claim to have “built” something from IKEA, but I wasn’t looking for a hobby project; I have websites to build. I’ll tell you what I did take away from the assembly process, though: I’m not sure I’ve ever been presented with any appliance more designed around being fixed. Not just at a “no glue or security bits”-level, but everything clearly labelled right down to the individual un-drop-and-lose-able captive screws; components with tiny QR code stickers that take you to those parts’ [replacement guides](https://guides.frame.work/).

The keyboard and trackpad snap into place with magnetic connectors and lock in with a pair of latches, with spacers filling out the empty spots to the side(s) of the trackpad and the keyboard if you’re not using it alongside a number pad. If you’ve been doing any reading up on these machines prior to this, you might be expecting me to say something about cosmetic tolerances here, like the spacers having enough wiggle room to constantly be a little out of alignment or slightly bowed. To you I would offer: I rode a British bike built in 1978 and live in a house built in the 1800s—I could not possibly begin to care about cosmetic things being slightly misaligned. It don’t hurt the running of it any; both the trackpad and keyboard felt good once I got past the _tremendous_ psychic damage of rebuilding twenty years’ worth of muscle memory.

The ports are configurable by way of “expansion cards” that fit into six slots along the sides of the machine, connecting up to recessed USB-C ports—they look a little like GameBoy cartridges. I have mine set up with a micro SD card reader, three USB-C passthrough cards, and a couple of old USB-A cards—if I need an ethernet or HDMI port, I flip a little latch on the back, pull one of the expansion cards out, and snap in the card for the new port. It’s a smart system.

The screen’s aspect ratio gives me a little more vertical space, and I’m not mad about it. On paper I think this thing is faster, but honestly, I’ll never have the throttle open far enough to know.

All told, the biggest “good” I can cite is that I don’t find myself missing anything about my MBP’s hardware. That’s a high bar to clear.

### The bad

From what I’ve seen around the internet, “I put it together and it worked” isn’t necessarily the slam-dunk given one might hope for. If internet commenters are to be believed, the quality assurance process around Framework hardware isn’t quite what it ought to be, and the support is worse. I have no idea how much stock to put in that, though: this one hypertext node aside, not a lot of people are falling all over themselves to punch “IT WORKS FINE AND I HAVE NO STRONG FEELINGS ABOUT IT” into a `textarea`.

The screen is a _little_ less sharp, in a way where I can really only tell if I go looking for it. The battery life is just okay; I want to say four or so hours by default, with regular-old-web-development-level usage. My guess is that this can be tinkered with at the OS level—I’ve read that identical machines running Windows do a lot better—but coming from the incredibly busted ~one hour battery on my MBP I feel spoiled anyway. For some reason, the webcam makes everything show up over-saturated and _very_ orange on Zoom, but it still happened after replacing the built-in webcam with a better one (mostly because I wanted an excuse to upgrade something). I wouldn’t be surprised if it’s a software thing; Zoom for Linux is pretty clearly neglected. I downloaded [cameractrls](https://github.com/soyersoyer/cameractrls) and fixed it.

Here’s a weird one: there’s a just _barely_ audible crackle from the speakers when I charge this thing with a USB-C cable that isn’t throttled to 60 or 100 watts (including the one that came with the machine) regardless of the current the laptop is actually drawing. I tell you, I have no idea what that’s about. I got a 100 watt cable, and problem solved. I never draw more than ~80 anyway.

So all told: a little more fussing required to get things dialed in the way I wanted them compared to firing up a new MacBook, but not a _ton_.

## Where I’m at

I like it. 

If it breaks, I can fix it. If that thing is hardware, I pull out the busted part and put in a new one. If that thing is software, I roll it back to before it broke, and I’m up and running again (I even tore off [all the parts of the test Dell that weren’t necessary to boot](https://front-end.social/@Wilto/113527084384964709), chucked in a bigger hard drive, and set it up as a [network storage that I `rsync` my Timeshift directory to daily](https://front-end.social/@Wilto/113188282043014223)). If eventually this thing can’t do something that I need it to do, I can upgrade it. Hell, if I wanted to [_build_ parts for it](https://github.com/FrameworkComputer/ExpansionBay), I could. 

Most of all, this setup fulfilled my zeroth requirement: _do not get in my way while I am working_. A little extra fussing on day one-ish, sure, fine, but I haven’t yet found myself unable to join a meeting on time for inexplicable computer-reasons or woken up to a busted development environment because NodeJS stopped NodeJS-ing correctly (any more than it usually does). It has a little more day-to-day grit to it than yet another MacBook Pro, but it still hasn't tripped my _incredibly_ low threshold for computer-related frustration.

I won’t say the word “recommend,” because again, I’m not here to sell anything. This is working for me, and if you’re starting to feel like a tool you use for work is becoming frustratingly iPaddified and artificially intelligenced, it might be an option.