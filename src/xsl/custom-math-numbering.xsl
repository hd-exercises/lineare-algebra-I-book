<!-- This file is currently not used as we haven't set up a custom build chain yet.
However, this
is the code that was manually added to the pretext-common.xsl file
at the very end. -->

<?xml version="1.0" encoding="UTF-8"?>

<xsl:stylesheet xmlns:xsl="http://www.w3.org/1999/XSL/Transform" version="1.0"
    xmlns:exsl="http://exslt.org/common"
    extension-element-prefixes="exsl">

    <xsl:import href="./core/pretext-common.xsl" />


    <!-- from here:
https://groups.google.com/g/mathbook-xml-support/c/iFJuTRUcVlQ/m/wRBtI2zzAwAJ -->
    <!-- Set exercises blocks to be numbered by their parent section   -->
    <xsl:template
        match="&THEOREM-LIKE;|&PROOF-LIKE;|&AXIOM-LIKE;|&DEFINITION-LIKE;|&REMARK-LIKE;|&COMPUTATION-LIKE;|&EXAMPLE-LIKE;|&PROJECT-LIKE;|&ASIDE-LIKE;|exercise|commentary|assemblage"
        mode="number">
        <xsl:variable name="serial">
            <xsl:apply-templates
                select="parent::*" mode="serial-number" />
        </xsl:variable>
    <xsl:if
            test="not($serial = '')">
            <!-- <xsl:apply-templates select="parent::*"
            mode="structure-number" /> -->
        <xsl:value-of
                select="$serial" />
        <xsl:text>.</xsl:text>
        <xsl:apply-templates select="."
                mode="serial-number">
            </xsl:apply-templates>
        </xsl:if>
    </xsl:template>
</xsl:stylesheet>