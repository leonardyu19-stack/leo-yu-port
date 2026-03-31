import { useEffect, useState } from 'react';
import { motion } from 'motion/react';

interface TimelineItem {
  date: string;
  content: string;
  link?: string;
  linkText?: string;
  suffix?: string;
}

const timelineData: TimelineItem[] = [
  { date: '03.23.26', content: 'Joins ', linkText: 'Stan', link: 'https://www.stan.store', suffix: ' Partnerships Team' },
  { date: '03.15.26', content: 'Moves to Los Angeles, CA' },
  { date: '02.20.26', content: 'Reaches ', linkText: '200k+ followers', link: 'https://beacons.ai/leoyu.mp4/mediakit', suffix: ' in 3 months' },
  { date: '12.05.25', content: 'Joins ', linkText: 'Cal AI', link: 'https://calai.app', suffix: ' as growth' },
  { date: '12.03.25', content: 'Launches freelance personal brand & content strategy consulting' },
  { date: '11.27.25', content: 'Joins ', linkText: 'MagicPath AI', link: 'https://www.magicpath.ai', suffix: ' as growth' },
  { date: '11.12.25', content: 'Begins building personal brand from scratch' },
  { date: '09.02.25', content: 'Moves to Miami, FL' },
  { date: '06.23.25', content: 'Joins ', linkText: 'ProMedia', link: 'https://promedia.com', suffix: ' Accounts Team' },
  { date: '10.01.23', content: 'Joins ', linkText: 'Epic Systems', link: 'https://www.epic.com', suffix: ' as Project Manager' },
  { date: '09.03.23', content: 'Moves to Madison, WI' },
  { date: '08.01.23', content: '', linkText: 'Mulch Masters', link: 'https://www.facebook.com/mulchmasterslandscape/', suffix: ' surpasses $250k gross revenue' },
  { date: '05.07.23', content: 'Graduates from The Ohio State University' },
  { date: '09.06.22', content: 'Co-founds ', linkText: 'MyoGlove', link: 'https://www.rev1ventures.com/blog/motivational-medicine-treats-acute-chronic-pain-touch/' },
  { date: '04.01.22', content: 'Joins ', linkText: 'Red Bull', link: 'https://www.redbull.com/us-en', suffix: ' marketing' },
  { date: '02.26.21', content: 'Becomes licensed ', linkText: 'real estate agent', link: 'https://www.realtor.com/realestateagents/608672f8eae679001210a3f7' },
  { date: '11.15.20', content: 'Scales two faceless TikTok accounts to 50k+ combined followers' },
  { date: '09.23.20', content: 'Launches first e-commerce brand, sells out in 30 days' },
  { date: '01.03.20', content: 'Makes first $1000 trading stock options' },
  { date: '08.16.19', content: 'Starts college at OSU' },
  { date: '05.15.19', content: 'Receives full ride to The Ohio State University' },
  { date: '05.15.17', content: 'Founds ', linkText: 'Mulch Masters', link: 'https://www.facebook.com/mulchmasterslandscape/' },
  { date: '04.29.17', content: 'Begins freelance videography (i.e. ', linkText: 'Toy Barn', link: 'https://www.toybarncars.com/about.htm', suffix: ')' },
  { date: '06.17.16', content: 'Posts ', linkText: 'first YouTube video', link: 'https://youtu.be/f20890HHBLo' },
  { date: '10.12.13', content: 'Starts sneaker reselling' },
  { date: '06.08.06', content: 'Moves from CAN to USA' },
  { date: '09.18.01', content: 'Leo is born' },
];

const socialLinks = [
  { label: 'LI', full: 'LinkedIn', href: 'https://www.linkedin.com/in/leonard-h-yu/' },
  { label: 'IG', full: 'Instagram', href: 'https://www.instagram.com/leoyu.mp4/' },
  { label: 'TT', full: 'TikTok', href: 'https://www.tiktok.com/@leoyu.mp4' },
  { label: 'Port', full: 'Portfolio', href: 'https://leonardyu2001.wixsite.com/leo-yu' },
];

function LeoTime() {
  const [time, setTime] = useState(new Date());

  useEffect(() => {
    const timer = setInterval(() => setTime(new Date()), 1000);
    return () => clearInterval(timer);
  }, []);

  return (
    <span className="font-mono text-[11px] opacity-50">
      {time.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit', second: '2-digit', hour12: false })}
    </span>
  );
}

export default function App() {
  return (
    <div className="min-h-screen max-w-2xl mx-auto px-6 py-12 md:py-24 selection:bg-black selection:text-white">
      {/* Header */}
      <header className="flex justify-between items-baseline mb-16">
        <motion.h1 
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-xl font-medium tracking-tighter"
        >
          leo.
        </motion.h1>
        
        <nav className="flex gap-x-4 gap-y-2 flex-wrap justify-end">
          {socialLinks.map((link, i) => (
            <motion.a
              key={link.label}
              href={link.href}
              target="_blank"
              rel="noopener noreferrer"
              initial="initial"
              whileHover="hover"
              animate="animate"
              variants={{
                initial: { opacity: 0, y: 10 },
                animate: { opacity: 1, y: 0, transition: { delay: i * 0.05 } }
              }}
              className="text-[11px] font-medium opacity-50 hover:opacity-100 transition-opacity uppercase tracking-widest relative"
            >
              {/* Desktop View: Reveal on Hover */}
              <span className="hidden md:block relative">
                <span className="invisible">{link.full}</span>
                <motion.span 
                  className="absolute left-0 top-0 whitespace-nowrap"
                  variants={{
                    initial: { opacity: 1 },
                    hover: { opacity: 0 }
                  }}
                  transition={{ duration: 0.2 }}
                >
                  {link.label}
                </motion.span>
                <motion.span 
                  className="absolute left-0 top-0 whitespace-nowrap"
                  variants={{
                    initial: { opacity: 0 },
                    hover: { opacity: 1 }
                  }}
                  transition={{ duration: 0.2 }}
                >
                  {link.full}
                </motion.span>
              </span>

              {/* Mobile View: Always Full */}
              <span className="md:hidden">
                {link.full}
              </span>
            </motion.a>
          ))}
        </nav>
      </header>

      {/* Timeline */}
      <main className="space-y-4">
        {timelineData.map((item, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, x: -10 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.1 + i * 0.03 }}
            className="group flex gap-6 items-start py-1"
          >
            <span className="font-mono text-[11px] opacity-30 group-hover:opacity-60 transition-opacity pt-1 shrink-0 w-16">
              {item.date}
            </span>
            <p className="text-[14px] leading-relaxed tracking-tight opacity-80 group-hover:opacity-100 transition-opacity">
              {item.linkText ? (
                <>
                  {item.content}
                  <a 
                    href={item.link} 
                    target="_blank" 
                    rel="noopener noreferrer" 
                    className="underline decoration-black/30 underline-offset-4 hover:decoration-black transition-colors"
                  >
                    {item.linkText}
                  </a>
                  {item.suffix}
                </>
              ) : item.link ? (
                <a 
                  href={item.link} 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="underline decoration-black/30 underline-offset-4 hover:decoration-black transition-colors"
                >
                  {item.content}
                </a>
              ) : (
                item.content
              )}
            </p>
          </motion.div>
        ))}
      </main>

      {/* Footer */}
      <footer className="mt-24 pt-8 border-t border-black/5 flex flex-col gap-8">
        <div className="flex justify-between items-center">
          <a 
            href="mailto:leoyu.mp4@gmail.com" 
            className="text-[14px] font-medium tracking-tight hover:underline underline-offset-4 decoration-black/30"
          >
            leoyu.mp4@gmail.com
          </a>
          <div className="flex items-center gap-2">
            <span className="text-[11px] opacity-30 uppercase tracking-widest">Leo Time:</span>
            <LeoTime />
          </div>
        </div>
      </footer>
    </div>
  );
}
