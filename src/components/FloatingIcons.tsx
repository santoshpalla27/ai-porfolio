'use client';

import { motion } from 'framer-motion';
import {
    AwsIcon,
    DockerIcon,
    KubernetesIcon,
    TerraformIcon,
    ReactIcon,
    NextjsIcon,
    TypeScriptIcon,
    TailwindIcon,
    LinuxIcon,
    JenkinsIcon,
    GitIcon,
} from './Icons';

const icons = [
    { Icon: AwsIcon, color: '#FF9900', delay: 0 },
    { Icon: DockerIcon, color: '#2496ED', delay: 2 },
    { Icon: KubernetesIcon, color: '#326CE5', delay: 4 },
    { Icon: TerraformIcon, color: '#7B42BC', delay: 1 },
    { Icon: ReactIcon, color: '#61DAFB', delay: 3 },
    { Icon: NextjsIcon, color: '#000000', delay: 5 },
    { Icon: TypeScriptIcon, color: '#3178C6', delay: 0.5 },
    { Icon: TailwindIcon, color: '#06B6D4', delay: 2.5 },
    { Icon: LinuxIcon, color: '#FCC624', delay: 4.5 },
    { Icon: JenkinsIcon, color: '#D24939', delay: 1.5 },
    { Icon: GitIcon, color: '#F05032', delay: 3.5 },
];

export default function FloatingIcons() {
    return (
        <div className="pointer-events-none absolute inset-0 overflow-hidden">
            {icons.map(({ Icon, color, delay }, index) => (
                <motion.div
                    key={index}
                    className="absolute opacity-20 dark:opacity-10"
                    initial={{
                        x: Math.random() * 100 + '%',
                        y: Math.random() * 100 + '%',
                        scale: 0.5,
                        rotate: 0,
                    }}
                    animate={{
                        y: [
                            Math.random() * 100 + '%',
                            Math.random() * 100 + '%',
                            Math.random() * 100 + '%',
                        ],
                        x: [
                            Math.random() * 100 + '%',
                            Math.random() * 100 + '%',
                            Math.random() * 100 + '%',
                        ],
                        rotate: [0, 180, 360],
                    }}
                    transition={{
                        duration: 20 + Math.random() * 10,
                        repeat: Infinity,
                        ease: 'linear',
                        delay: delay,
                    }}
                >
                    <Icon width={40} height={40} color={color} />
                </motion.div>
            ))}
        </div>
    );
}
