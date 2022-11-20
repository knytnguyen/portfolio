import { useCallback, useEffect, useState } from "react";

export enum Phase {
    Typing,
    Pausing,
    Deleting,
}

const TYPING_INTERVAL = 150
const PAUSE_MS = 1000
const DELETING_INTERVAL = 50

export const useTypedSubtext = (subtexts: string[]) => {
    const [phase, setPhase] = useState(Phase.Typing)
    const [typedSubtext, setTypedSubtext] = useState('')
    useEffect(() => {
        switch(phase) {
            case Phase.Typing: {
                const nextTypedSubtext = subtexts[0].slice(0, typedSubtext.length + 1)
  
                if (nextTypedSubtext === typedSubtext) {
                    setPhase(Phase.Pausing)
                    return
                }
            
                const timeout = setTimeout(() => {
                    setTypedSubtext(nextTypedSubtext)
                }, TYPING_INTERVAL)

                return () => clearTimeout(timeout)
            }
            case Phase.Deleting: {
                if (!typedSubtext) {
                    setPhase(Phase.Typing)
                    return
                }

                const nextRemaining = subtexts[0].slice(0, typedSubtext.length - 1)
            
                const timeout = setTimeout(() => {
                    setTypedSubtext(nextRemaining)
                }, DELETING_INTERVAL)

                return () => clearTimeout(timeout)
            }
            case Phase.Pausing:
            default:
                const timeout = setTimeout(() => {
                    setPhase(Phase.Deleting)
                }, PAUSE_MS)

                return () => clearTimeout(timeout)
        }
    }, [subtexts, typedSubtext, phase])
    return typedSubtext
}