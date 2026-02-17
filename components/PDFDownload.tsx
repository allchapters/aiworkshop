'use client';

import { useState } from 'react';
import { toPng } from 'html-to-image';
import jsPDF from 'jspdf';
import { FileDown, Loader2 } from 'lucide-react';
import { Button } from '@/components/ui/button';

export default function PDFDownload() {
    const [isGenerating, setIsGenerating] = useState(false);

    const generatePDF = async () => {
        setIsGenerating(true);
        try {
            const element = document.body;
            // html-to-image is more robust with modern CSS (oklch/lab)
            const dataUrl = await toPng(element, {
                backgroundColor: '#05050a', // Cyber theme bg
                cacheBust: true,
            });

            const img = new Image();
            img.src = dataUrl;
            await new Promise((resolve) => { img.onload = resolve; });

            const imgWidth = img.width;
            const imgHeight = img.height;

            // Create PDF with exact dimensions of the content
            const pdf = new jsPDF({
                orientation: imgWidth > imgHeight ? 'l' : 'p',
                unit: 'px',
                format: [imgWidth, imgHeight]
            });

            pdf.addImage(dataUrl, 'PNG', 0, 0, imgWidth, imgHeight);
            pdf.save('AI_Workshop_Brief.pdf');

            // Success feedback
            // setTimeout(() => alert("Brief exported successfully!"), 100);

        } catch (err) {
            console.error("PDF Generation failed", err);
            alert("Export failed. Please try again.");
        } finally {
            setIsGenerating(false);
        }
    };

    return (
        <div className="fixed bottom-8 right-8 z-50">
            <Button
                onClick={generatePDF}
                disabled={isGenerating}
                className="bg-cyber-gold text-black hover:bg-white hover:text-black font-display font-bold border-2 border-cyber-gold rounded-none shadow-[0_0_20px_rgba(255,183,0,0.5)] transition-all hover:scale-105 active:scale-95"
            >
                {isGenerating ? (
                    <>
                        <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                        PROCESSING DATA...
                    </>
                ) : (
                    <>
                        <FileDown className="mr-2 h-4 w-4" />
                        EXPORT BRIEF.PDF
                    </>
                )}
            </Button>
        </div>
    );
}
